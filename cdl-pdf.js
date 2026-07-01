/* =====================================================================
 * cdl-pdf.js - Cercle des Langues branded PDF engine
 * ---------------------------------------------------------------------
 * window.CDLPdf.generate(config) -> Promise<{ pages, fonts, base64 }>
 * Builds an on-brand, multi-page PDF lead magnet (fiche-memo) entirely
 * client-side with jsPDF. Self-contained: jsPDF, Montserrat and the CDL
 * logo are all loaded LAZILY at generation time only (never on page
 * load), so an article embedding the download block keeps its Core Web
 * Vitals intact.
 *
 * Charter (cercle-des-langues-brand) baked in:
 *   - Montserrat Regular + Bold (embedded as real TTF, not a substitute)
 *   - Vert CDL #1ABC9C (headings/accents), Jaune CDL #FFC400, texte #263238
 *   - Grey #6F6F6F (secondary), CEFR badge colours, rounded shapes
 *   - Symmetric margins, footer on every page, hyphens only
 *   - Functional red #C5283D is NOT used: a PDF has no error state
 *
 * Robustness (degrade, never break):
 *   - jsPDF fails to load         -> generate() rejects; caller keeps the lead
 *   - a font weight fails to load  -> THAT weight falls back to Helvetica,
 *                                     the other weight + the PDF still render
 *   - the logo fails to load       -> a vector text wordmark is drawn instead
 *
 * Config shape:
 *   {
 *     title, subtitle,
 *     sections: [
 *       { heading, type:'text',  body },
 *       { heading, type:'table', columns:[a,b], rows:[[..],..] }   // cells wrap
 *     ],
 *     filename,            // e.g. "fiche-500-mots-anglais.pdf"
 *     level,               // optional CEFR code: A1..C2
 *     returnBase64         // optional: when true, the resolved object carries
 *                          //   base64 (a data URI) for a download fallback link
 *   }
 * ===================================================================== */
(function () {
  "use strict";

  if (window.CDLPdf && window.CDLPdf.__ready) return; // singleton guard

  /* ---------------------------------------------------------------
   * Configurable asset URLs (override window.CDLPdfConfig before use)
   *   For production, CDL can host Latin-subset Montserrat TTFs on the
   *   HubSpot file manager (like the logos) and point these there to
   *   shrink the at-generation fetch. See PDF-TOOL.md.
   * ------------------------------------------------------------- */
  var DEFAULT_JSPDF_URL = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
  var DEFAULT_JSPDF_SRI = "sha384-JcnsjUPPylna1s1fvi1u12X5qjY5OL56iySh75FdtrwhO/SWXgMjoVqcKyIIWOLk";

  var USER = window.CDLPdfConfig || {};
  var JSPDF_URL = USER.jsPdfUrl || DEFAULT_JSPDF_URL;
  // Apply Subresource Integrity only to the known default build. If an author
  // overrides the URL they must supply a matching hash via CDLPdfConfig.jsPdfSri.
  var JSPDF_SRI = USER.jsPdfSri || (JSPDF_URL === DEFAULT_JSPDF_URL ? DEFAULT_JSPDF_SRI : null);
  if (USER.jsPdfUrl && !USER.jsPdfSri) {
    console.error("[CDLPdf] jsPdfUrl overridden without jsPdfSri - the jsPDF script will load WITHOUT Subresource Integrity. Supply CDLPdfConfig.jsPdfSri (sha384) or self-host.");
  }
  var FONT_URLS = USER.fontUrls || {
    normal: "https://cdn.jsdelivr.net/npm/@expo-google-fonts/montserrat/Montserrat_400Regular.ttf",
    bold:   "https://cdn.jsdelivr.net/npm/@expo-google-fonts/montserrat/Montserrat_700Bold.ttf"
  };
  var LOGO_URL = USER.logoUrl ||
    "https://6034125.fs1.hubspotusercontent-na1.net/hubfs/6034125/Logo%20long%20SVG.svg";

  /* ---------------------------------------------------------------
   * Charter tokens
   * ------------------------------------------------------------- */
  var COLOR = {
    ink:   "#263238",
    grey:  "#6F6F6F",
    green: "#1ABC9C",
    gold:  "#FFC400",
    line:  "#EEEEEE",   // subtle separators
    white: "#FFFFFF"
  };
  var CEFR = {
    A1: { bg: "#E0F6F1", fg: "#04342C" },
    A2: { bg: "#78CFBE", fg: "#04342C" },
    B1: { bg: "#1ABC9C", fg: "#FFFFFF" },
    B2: { bg: "#15967D", fg: "#FFFFFF" },
    C1: { bg: "#0A6B5A", fg: "#FFFFFF" },
    C2: { bg: "#04342C", fg: "#FFFFFF" }
  };

  // A4 portrait geometry, millimetres. Margins are strictly symmetric.
  var PW = 210, PH = 297, M = 18;
  var CONTENT_W = PW - 2 * M;          // 174mm
  var FOOTER_Y = PH - 16;              // green rule baseline
  var BOTTOM_LIMIT = PH - 22;          // content must stop above the footer
  var CONT_TOP_Y = M + 4;              // top of content on continuation pages

  // table metrics
  var T_PADX = 3, T_PADY = 2.6, T_LINE_H = 4.6, T_MIN_ROW_H = 9, T_MAX_LINES = 8;

  /* ---------------------------------------------------------------
   * Lazy-load caches. We cache the in-flight PROMISE (like jsPdfPromise)
   * so concurrent generate() calls collapse to a single fetch/transcode/
   * rasterize each (e.g. the two-embeds-per-article layout).
   * ------------------------------------------------------------- */
  var jsPdfPromise = null;
  var FONT_PROMISE = {};   // weight key -> Promise<base64>
  var LOGO_PROMISE = null; // Promise<{dataURL,ratio}|null>

  /* ---------------------------------------------------------------
   * Small helpers
   * ------------------------------------------------------------- */
  function hexToRgb(hex) {
    var h = hex.replace("#", "");
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }

  // Coerce anything to a string and drop ASCII control characters.
  // jsPDF draws text as glyphs (no HTML parser) so there is no markup
  // injection vector; this is defensive hygiene only. No regex literal
  // is used so the source can never carry stray control bytes.
  function safe(v) {
    if (v == null) return "";
    var s = String(v), out = "";
    for (var i = 0; i < s.length; i++) {
      var code = s.charCodeAt(i);
      if (code < 32 || code === 127) continue; // skip control chars
      out += s.charAt(i);
    }
    return out;
  }

  function setText(doc, hex) { var c = hexToRgb(hex); doc.setTextColor(c[0], c[1], c[2]); }
  function setFill(doc, hex) { var c = hexToRgb(hex); doc.setFillColor(c[0], c[1], c[2]); }
  function setDraw(doc, hex) { var c = hexToRgb(hex); doc.setDrawColor(c[0], c[1], c[2]); }

  function loadScript(src, integrity) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = src; s.async = true;
      if (integrity) { s.integrity = integrity; s.crossOrigin = "anonymous"; }
      s.onload = resolve;
      s.onerror = function () { reject(new Error("script load failed: " + src)); };
      document.head.appendChild(s);
    });
  }

  function getJsPDF() {
    return (window.jspdf && window.jspdf.jsPDF) || window.jsPDF || null;
  }

  function isCrossOrigin(url) {
    try { return new URL(url, location.href).origin !== location.origin; }
    catch (e) { return true; }
  }

  function ensureJsPDF() {
    if (getJsPDF()) return Promise.resolve(getJsPDF());
    // Fail closed: never load a cross-origin jsPDF without integrity. The
    // pinned default carries SRI; an author override must supply jsPdfSri
    // or self-host (same-origin).
    if (!JSPDF_SRI && isCrossOrigin(JSPDF_URL)) {
      return Promise.reject(new Error("[CDLPdf] refusing to load cross-origin jsPDF without SRI - set CDLPdfConfig.jsPdfSri or self-host"));
    }
    if (!jsPdfPromise) {
      jsPdfPromise = loadScript(JSPDF_URL, JSPDF_SRI).then(function () {
        var J = getJsPDF();
        if (!J) throw new Error("jsPDF loaded but global not found");
        return J;
      }).catch(function (e) { jsPdfPromise = null; throw e; });
    }
    return jsPdfPromise;
  }

  function abToBase64(buf) {
    var bytes = new Uint8Array(buf), CH = 0x8000, parts = [];
    for (var i = 0; i < bytes.length; i += CH) {
      parts.push(String.fromCharCode.apply(null, bytes.subarray(i, i + CH)));
    }
    return btoa(parts.join(""));
  }

  function fetchBase64(url) {
    return fetch(url, { cache: "force-cache" }).then(function (res) {
      if (!res.ok) throw new Error("fetch " + res.status + " " + url);
      return res.arrayBuffer();
    }).then(abToBase64);
  }

  /* ---------------------------------------------------------------
   * Font: embed real Montserrat (Regular + Bold). Per-weight fallback
   * to Helvetica so one missing weight never sinks the PDF. The fetch
   * promise is shared across concurrent generate() calls; a failure
   * clears the cache entry so a later generate can retry.
   * ------------------------------------------------------------- */
  function fontBase64(key, url) {
    if (FONT_PROMISE[key]) return FONT_PROMISE[key];
    var p = fetchBase64(url);
    FONT_PROMISE[key] = p;
    p.catch(function () { if (FONT_PROMISE[key] === p) FONT_PROMISE[key] = null; });
    return p;
  }

  function loadFontInto(doc) {
    var weights = [
      { key: "normal", style: "normal", file: "Montserrat-Regular.ttf", url: FONT_URLS.normal },
      { key: "bold",   style: "bold",   file: "Montserrat-Bold.ttf",    url: FONT_URLS.bold }
    ];
    var status = { normal: false, bold: false };
    // Both weights fetched concurrently (independent requests); addFileToVFS/
    // addFont are synchronous and order-independent across the two weights.
    return Promise.all(weights.map(function (w) {
      return fontBase64(w.key, w.url).then(function (b64) {
        doc.addFileToVFS(w.file, b64);
        doc.addFont(w.file, "Montserrat", w.style);
        status[w.key] = true;
      }).catch(function (e) {
        status[w.key] = false;
        console.warn("[CDLPdf] Montserrat " + w.style + " unavailable, Helvetica fallback for this weight:", e && e.message);
      });
    })).then(function () { return status; });
  }

  /* ---------------------------------------------------------------
   * Logo: fetch SVG -> rasterize via <img> + canvas -> PNG dataURL.
   * SVG rendered via <img> runs in restricted mode (no script, no
   * external fetch); toDataURL is wrapped in try/catch so any
   * SecurityError degrades to the text wordmark. Cached as a shared
   * promise; resolves null on any failure (never rejects to callers).
   * ------------------------------------------------------------- */
  function rasterizeSVG(svgText, targetW) {
    return new Promise(function (resolve, reject) {
      var W = 300, H = 100;
      var vb = svgText.match(/viewBox=["']([\d.\-\s]+)["']/);
      if (vb) {
        var p = vb[1].trim().split(/\s+/);
        if (p.length === 4) { W = parseFloat(p[2]) || W; H = parseFloat(p[3]) || H; }
      } else {
        var wm = svgText.match(/\bwidth=["'](\d+(?:\.\d+)?)/);
        var hm = svgText.match(/\bheight=["'](\d+(?:\.\d+)?)/);
        if (wm) W = parseFloat(wm[1]); if (hm) H = parseFloat(hm[1]);
      }
      // Bail to the text wordmark on bad geometry (e.g. a re-hosted logo with
      // width="0"/NaN) - otherwise ratio=Infinity yields a 0-width invisible
      // logo while logo.dataURL stays truthy and the wordmark is skipped.
      if (!(W > 0) || !(H > 0)) { reject(new Error("svg has no usable dimensions")); return; }
      var ratio = H / W;
      var cw = targetW, ch = Math.max(1, Math.round(targetW * ratio));
      var img = new Image();
      img.onload = function () {
        try {
          var canvas = document.createElement("canvas");
          canvas.width = cw; canvas.height = ch;
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, cw, ch);
          resolve({ dataURL: canvas.toDataURL("image/png"), ratio: ratio });
        } catch (err) { reject(err); }
      };
      img.onerror = function () { reject(new Error("svg raster failed")); };
      img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgText);
    });
  }

  function loadLogo() {
    if (LOGO_PROMISE) return LOGO_PROMISE;
    LOGO_PROMISE = fetch(LOGO_URL, { cache: "force-cache" }).then(function (res) {
      if (!res.ok) throw new Error("logo " + res.status);
      return res.text();
    }).then(function (svg) {
      if (svg.indexOf("<svg") === -1) throw new Error("logo response is not an SVG"); // sniff; bail to wordmark
      return rasterizeSVG(svg, 440);   // matched to the ~90mm max draw box (retina print)
    }).catch(function (e) {
      console.warn("[CDLPdf] logo unavailable, text wordmark fallback:", e && e.message);
      return null;
    });
    return LOGO_PROMISE;
  }

  /* ---------------------------------------------------------------
   * Rendering
   * ------------------------------------------------------------- */
  function makeFontPicker(doc, status) {
    return {
      body: function () { doc.setFont(status.normal ? "Montserrat" : "helvetica", "normal"); },
      bold: function () { doc.setFont(status.bold ? "Montserrat" : "helvetica", "bold"); }
    };
  }

  function newPage(doc) { doc.addPage(); return CONT_TOP_Y; }

  function drawHeader(doc, font, config, logo) {
    var y = M;
    var LOGO_H = 11; // mm
    if (logo && logo.dataURL) {
      var logoW = LOGO_H / logo.ratio;            // preserve aspect ratio
      if (logoW > 90) { logoW = 90; }             // never overrun the column
      doc.addImage(logo.dataURL, "PNG", M, y, logoW, LOGO_H);
    } else {
      font.bold(); doc.setFontSize(16); setText(doc, COLOR.green);
      doc.text("Cercle des Langues", M, y + 8);
    }

    // CEFR badge (header page only), top-right, aligned with the logo row
    if (config.level && CEFR[config.level]) {
      var c = CEFR[config.level];
      var label = "Niveau " + config.level;
      font.bold(); doc.setFontSize(9);
      var tw = doc.getTextWidth(label);
      var bw = tw + 10, bh = 7;
      var bx = PW - M - bw, by = y;
      setFill(doc, c.bg); doc.roundedRect(bx, by, bw, bh, 2, 2, "F");
      setText(doc, c.fg);
      doc.text(label, bx + bw / 2, by + 4.8, { align: "center" });
    }

    y += LOGO_H + 9;

    // Title (guarded: a very long config title can never clip past the footer)
    font.bold(); doc.setFontSize(20); setText(doc, COLOR.ink);
    var titleLines = wrapText(doc, config.title || "", CONTENT_W);
    for (var i = 0; i < titleLines.length; i++) {
      if (y + 8 > BOTTOM_LIMIT) { y = newPage(doc); font.bold(); doc.setFontSize(20); setText(doc, COLOR.ink); }
      doc.text(titleLines[i], M, y); y += 8;
    }

    // Subtitle (same guard)
    if (config.subtitle) {
      y += 1;
      font.body(); doc.setFontSize(11); setText(doc, COLOR.grey);
      var subLines = wrapText(doc, config.subtitle, CONTENT_W);
      for (var j = 0; j < subLines.length; j++) {
        if (y + 6 > BOTTOM_LIMIT) { y = newPage(doc); font.body(); doc.setFontSize(11); setText(doc, COLOR.grey); }
        doc.text(subLines[j], M, y); y += 6;
      }
    }

    // Divider
    y += 3;
    if (y + 9 > BOTTOM_LIMIT) y = newPage(doc);
    setDraw(doc, COLOR.green); doc.setLineWidth(0.5);
    doc.line(M, y, PW - M, y);
    y += 9;
    return y;
  }

  function renderTextSection(doc, font, y, section) {
    font.bold(); doc.setFontSize(13);
    var hLines = wrapText(doc, section.heading || "", CONTENT_W);
    font.body(); doc.setFontSize(10.5);
    // Honor intentional line breaks (paragraphs / bullets): split on \n first, then wrap
    // each segment. An empty segment renders as a blank line (paragraph gap). A body with
    // no \n is a single segment -> identical to the previous behaviour.
    var bSegs = String(section.body || "").split("\n");
    var bLines = [];
    for (var bi = 0; bi < bSegs.length; bi++) {
      if (bSegs[bi] === "") { bLines.push(""); continue; }
      var bw = wrapText(doc, bSegs[bi], CONTENT_W);
      for (var bj = 0; bj < bw.length; bj++) bLines.push(bw[bj]);
    }

    // Orphan guard: never strand a heading at the foot of a page - require
    // room for the heading plus a few body lines before drawing it.
    if (y + hLines.length * 7 + Math.min(3, bLines.length) * 5.4 > BOTTOM_LIMIT) y = newPage(doc);

    font.bold(); doc.setFontSize(13); setText(doc, COLOR.green);
    for (var i = 0; i < hLines.length; i++) {
      if (y + 7 > BOTTOM_LIMIT) y = newPage(doc);
      doc.text(hLines[i], M, y); y += 7;
    }
    font.body(); doc.setFontSize(10.5); setText(doc, COLOR.ink);
    for (var k = 0; k < bLines.length; k++) {
      if (y + 6 > BOTTOM_LIMIT) y = newPage(doc);
      doc.text(bLines[k], M, y); y += 5.4;
    }
    return y + 5;
  }

  // Wrap a cell into lines that fit the column; clamp a runaway cell so
  // the layout can never overflow, and warn so authoring-time data loss
  // is visible rather than silent.
  // Hard-break a line that is wider than maxW (splitTextToSize only breaks on
  // whitespace, so a space-less token - URL, email, compound - would otherwise
  // render as one over-wide line and overrun the column / page edge).
  function hardBreak(doc, line, maxW) {
    if (doc.getTextWidth(line) <= maxW) return [line];
    var out = [], cur = "";
    for (var i = 0; i < line.length; i++) {
      var ch = line.charAt(i);
      if (cur !== "" && doc.getTextWidth(cur + ch) > maxW) { out.push(cur); cur = ch; }
      else { cur += ch; }
    }
    if (cur !== "") out.push(cur);
    return out.length ? out : [line];
  }

  // Wrap prose to maxW AND hard-break any space-less token wider than maxW, so a
  // long URL/token in a title/subtitle/body can never overrun the right margin.
  function wrapText(doc, text, maxW) {
    var wrapped = doc.splitTextToSize(safe(text), maxW);
    var out = [];
    for (var i = 0; i < wrapped.length; i++) {
      var parts = hardBreak(doc, wrapped[i], maxW);
      for (var j = 0; j < parts.length; j++) out.push(parts[j]);
    }
    return out;
  }

  function wrapCell(doc, text, maxW) {
    if (!(maxW > 0)) return [safe(text)];  // never call splitTextToSize with a non-positive width
    var wrapped = doc.splitTextToSize(safe(text), maxW);
    var lines = [];
    for (var i = 0; i < wrapped.length; i++) {
      var parts = hardBreak(doc, wrapped[i], maxW);
      for (var j = 0; j < parts.length; j++) lines.push(parts[j]);
    }
    if (lines.length > T_MAX_LINES) {
      lines = lines.slice(0, T_MAX_LINES);
      lines[T_MAX_LINES - 1] = lines[T_MAX_LINES - 1] + "...";
      console.warn("[CDLPdf] table cell clamped to " + T_MAX_LINES + " lines:", String(text).slice(0, 40));
    }
    return lines;
  }

  function renderTableSection(doc, font, y, section) {
    var cols = section.columns || [];
    var rows = section.rows || [];
    var n = Math.max(1, cols.length);
    // Hard-cap columns to a legible floor so cellW can never reach <=0 and run
    // off-page; surface the limit at authoring time rather than shipping clipped.
    var MIN_COL_W = 14; // mm
    var maxCols = Math.max(1, Math.floor(CONTENT_W / MIN_COL_W)); // ~12 on A4
    if (n > maxCols) {
      console.warn("[CDLPdf] table declares " + n + " columns; rendering the first " + maxCols + " (max for legibility on A4). Reduce or split the table.");
      cols = cols.slice(0, maxCols);
      n = maxCols;
    }
    var colW = CONTENT_W / n;
    var cellW = colW - 2 * T_PADX;  // >= MIN_COL_W - 2*T_PADX = 8mm; never <= 0
    if (colW < 22) console.warn("[CDLPdf] " + n + " columns -> " + colW.toFixed(1) + "mm each; keep tables to ~6 columns for legibility (see PDF-TOOL.md).");
    // Warn once if any row has more cells than columns (extra cells are not drawn).
    for (var rw = 0; rw < rows.length; rw++) {
      if (rows[rw] && rows[rw].length > n) {
        console.warn("[CDLPdf] a row has " + rows[rw].length + " cells but the table has " + n + " columns; extra cells are not drawn.");
        break;
      }
    }

    // Measure a row ONCE: wrap each cell, keep the lines, and derive height.
    // fontSetter must match the weight used at draw time (glyph widths differ).
    function measureRow(cells, fontSetter) {
      fontSetter(); doc.setFontSize(10);
      var perCol = [], maxLines = 1;
      for (var c = 0; c < n; c++) {
        var l = wrapCell(doc, cells[c], cellW);
        perCol.push(l);
        if (l.length > maxLines) maxLines = l.length;
      }
      return { lines: perCol, h: Math.max(T_MIN_ROW_H, maxLines * T_LINE_H + 2 * T_PADY) };
    }

    // Draw a pre-measured row - no re-wrapping.
    function drawRow(m, isHeader) {
      if (isHeader) {
        setFill(doc, COLOR.green); doc.roundedRect(M, y, CONTENT_W, m.h, 1.5, 1.5, "F");
        font.bold(); doc.setFontSize(10); setText(doc, COLOR.white);
      } else {
        font.body(); doc.setFontSize(10); setText(doc, COLOR.ink);
      }
      for (var c = 0; c < n; c++) {
        var lines = m.lines[c] || [];
        for (var li = 0; li < lines.length; li++) {
          doc.text(lines[li], M + c * colW + T_PADX, y + T_PADY + T_LINE_H * (li + 1) - 0.8);
        }
      }
      if (!isHeader) {
        setDraw(doc, COLOR.line); doc.setLineWidth(0.2);
        doc.line(M, y + m.h, PW - M, y + m.h);
        for (var v = 1; v < n; v++) { doc.line(M + v * colW, y + 0.5, M + v * colW, y + m.h - 0.5); }
      }
      y += m.h;
    }

    var headerM = measureRow(cols, font.bold);                    // measured once, reused on every page
    var firstRowM = rows.length ? measureRow(rows[0], font.body) : { lines: [], h: T_MIN_ROW_H };

    // heading
    font.bold(); doc.setFontSize(13);
    var hLines = wrapText(doc, section.heading || "", CONTENT_W);
    // Orphan guard: heading + header + first body row must fit together.
    if (y + hLines.length * 7 + 1 + headerM.h + firstRowM.h > BOTTOM_LIMIT) y = newPage(doc);
    for (var i = 0; i < hLines.length; i++) {
      if (y + 7 > BOTTOM_LIMIT) y = newPage(doc);
      font.bold(); doc.setFontSize(13); setText(doc, COLOR.green);
      doc.text(hLines[i], M, y); y += 7;
    }
    y += 1;

    // rows: the header is drawn only immediately before a real row, so it
    // can never be stranded alone at the bottom of a page.
    var headerDrawn = false;
    for (var r = 0; r < rows.length; r++) {
      var rowM = (r === 0) ? firstRowM : measureRow(rows[r], font.body);
      if (!headerDrawn) {
        if (y + headerM.h + rowM.h > BOTTOM_LIMIT) y = newPage(doc);
        drawRow(headerM, true); headerDrawn = true;
      } else if (y + rowM.h > BOTTOM_LIMIT) {
        y = newPage(doc); drawRow(headerM, true);
      }
      drawRow(rowM, false);
    }
    if (!rows.length) { // header-only table
      if (y + headerM.h > BOTTOM_LIMIT) y = newPage(doc);
      drawRow(headerM, true);
    }
    return y + 6;
  }

  function stampFooters(doc, font) {
    var total = doc.internal.getNumberOfPages();
    for (var i = 1; i <= total; i++) {
      doc.setPage(i);
      setDraw(doc, COLOR.green); doc.setLineWidth(0.4);
      doc.line(M, FOOTER_Y, PW - M, FOOTER_Y);
      font.body(); doc.setFontSize(8); setText(doc, COLOR.grey);
      doc.text("Cercle des Langues - votre conseiller pédagogique vous accompagne", M, FOOTER_Y + 5);
      doc.text("Page " + i + " / " + total, PW - M, FOOTER_Y + 5, { align: "right" });
    }
  }

  /* ---------------------------------------------------------------
   * Public: generate
   * ------------------------------------------------------------- */
  function generate(config) {
    config = config || {};
    return ensureJsPDF().then(function (jsPDF) {
      var doc = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
      // Font + logo in parallel; both degrade safely on failure.
      return Promise.all([loadFontInto(doc), loadLogo()]).then(function (out) {
        var fontStatus = out[0];
        var logo = out[1];
        var font = makeFontPicker(doc, fontStatus);

        var y = drawHeader(doc, font, config, logo);
        var sections = config.sections || [];
        for (var i = 0; i < sections.length; i++) {
          var s = sections[i] || {};
          if (s.newPageBefore && y > CONT_TOP_Y) y = newPage(doc);  // start on a fresh page (e.g. the corrigé)
          if (s.type === "table") y = renderTableSection(doc, font, y, s);
          else if (s.type === "text") y = renderTextSection(doc, font, y, s);
          else { console.warn("[CDLPdf] unknown section type, rendering as text:", s.type); y = renderTextSection(doc, font, y, s); }
        }
        stampFooters(doc, font);

        var filename = config.filename || "fiche-cercle-des-langues.pdf";
        // autoSave defaults to true (direct callers get an instant download).
        // The embed passes autoSave:false and drives the download from a single
        // visible <a download> blob link, so doc.save() can never navigate the
        // tab away from the success screen on iOS.
        if (config.autoSave !== false) doc.save(filename);
        return {
          pages: doc.internal.getNumberOfPages(),
          fonts: fontStatus,
          filename: filename,
          // Each serialization is opt-in. The embed asks for a Blob (one
          // serialization, no atob, no second string copy); tests ask for base64.
          blob:   config.returnBlob   ? doc.output("blob") : null,
          base64: config.returnBase64 ? doc.output("datauristring") : null
        };
      });
    });
  }

  window.CDLPdf = {
    __ready: true,
    generate: generate,
    // exposed for tests / advanced use
    _ensureJsPDF: ensureJsPDF,
    _cefr: CEFR,
    _color: COLOR
  };
})();
