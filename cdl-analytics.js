/* =====================================================================
 * cdl-analytics.js - Cercle des Langues site-wide analytics
 * ---------------------------------------------------------------------
 * Dependency-free, deferable, zero-config. Drop on EVERY page
 * (site-wide custom code). Pushes a single standard event shape into
 * window.dataLayer (GTM-KSCCG9P). Safe on pages with no games, no CTAs,
 * no PDFs and no cdl-tools.js - it simply emits fewer events.
 *
 * Events pushed (all prefixed cdl_, never collides with word_catcher_):
 *   - cdl_scroll_depth     (engagement)  value 25/50/75/100, once per page
 *   - cdl_cta_click        (lead)        .button-green clicks
 *   - cdl_tool_link_click  (navigation)  a[href*="/test-anglais/"] clicks
 *   - cdl_download_intent  (engagement)  dormant: PDF / hubfs / data-cdl-download
 *
 * Design notes:
 *   - ONE delegated, passive document-level click listener (.closest()).
 *   - Scroll listener is throttled via requestAnimationFrame + passive.
 *   - No per-element listeners (nothing to leak / nothing to detach).
 *   - Never pushes PII (no name / email / phone). Labels are sanitized.
 * ===================================================================== */
(function () {
  "use strict";

  if (window.__cdlAnalyticsReady) return; // singleton guard
  window.__cdlAnalyticsReady = true;

  var MAX_LABEL = 80;

  /* ---------------------------------------------------------------
   * Shared helper - builds the EXACT standard event shape (flat keys).
   * Kept byte-identical in spirit with cdl-tools.js CDLTools.track.
   * ------------------------------------------------------------- */
  function sanitizeLabel(v) {
    if (v == null) return null;
    var s = String(v).replace(/\s+/g, " ").trim();
    if (!s) return null;
    return s.length > MAX_LABEL ? s.slice(0, MAX_LABEL) : s;
  }

  function pageType() {
    var p = (location.pathname || "").toLowerCase();
    if (p === "/" || p === "") return "home";
    if (p.indexOf("/test-niveau") !== -1) return "hub";   // tools hub: /test-niveau-anglais
    if (p.indexOf("/test-anglais/") !== -1) return "game";
    if (p.indexOf("/blog") !== -1) return "blog";
    if (p.indexOf("/formation") !== -1) return "formation";
    if (p.indexOf("/landing") !== -1 || p.indexOf("/lp") !== -1) return "landing";
    return "other";
  }

  function track(name, params) {
    params = params || {};
    var dl = (window.dataLayer = window.dataLayer || []);
    dl.push({
      event:     "cdl_" + name,
      tool:      params.tool != null ? params.tool : null,
      page_type: pageType(),
      page_path: location.pathname,
      category:  params.category != null ? params.category : null,
      label:     params.label != null ? sanitizeLabel(params.label) : null,
      value:     params.value != null ? params.value : null
    });
  }

  /* ---------------------------------------------------------------
   * Delegated click listener (ONE listener, .closest() routing)
   * ------------------------------------------------------------- */
  function onClick(e) {
    var t = e.target;
    if (!t || typeof t.closest !== "function") return;

    // CTA click - .button-green
    var cta = t.closest(".button-green");
    if (cta) {
      track("cta_click", { category: "lead", label: cta.textContent });
      return;
    }

    // Tool link click - a[href*="/test-anglais/"]
    var toolLink = t.closest('a[href*="/test-anglais/"]');
    if (toolLink) {
      var path = toolLink.getAttribute("href") || "";
      try { path = new URL(toolLink.href, location.href).pathname; } catch (err) {}
      track("tool_link_click", { category: "navigation", label: path });
      return;
    }

    // Download intent - DORMANT defensive listener. Fires nothing today
    // (downloads are form-gated and not yet built) but auto-works the
    // moment such elements appear, with zero code change.
    var dl = t.closest('a[href$=".pdf"], a[href*="/hubfs/"], [data-cdl-download]');
    if (dl) {
      var label = dl.getAttribute("href") || dl.getAttribute("data-cdl-download") || "";
      try { if (dl.href) label = new URL(dl.href, location.href).pathname; } catch (e2) {}
      track("download_intent", { category: "engagement", label: label });
      return;
    }
  }

  /* ---------------------------------------------------------------
   * Scroll depth - throttled (rAF) + passive, once per milestone
   * ------------------------------------------------------------- */
  var MILESTONES = [25, 50, 75, 100];
  var firedScroll = {};
  var scrollTicking = false;

  function scrollPercent() {
    var doc = document.documentElement;
    var body = document.body || {};
    var scrollTop = window.pageYOffset || doc.scrollTop || body.scrollTop || 0;
    var winH = window.innerHeight || doc.clientHeight || 0;
    var docH = Math.max(
      doc.scrollHeight || 0, body.scrollHeight || 0,
      doc.offsetHeight || 0, body.offsetHeight || 0,
      doc.clientHeight || 0
    );
    var scrollable = docH - winH;
    if (scrollable <= 0) return 100; // short page - fully seen
    return Math.min(100, Math.round((scrollTop / scrollable) * 100));
  }

  function evaluateScroll() {
    scrollTicking = false;
    var pct = scrollPercent();
    for (var i = 0; i < MILESTONES.length; i++) {
      var m = MILESTONES[i];
      if (pct >= m && !firedScroll[m]) {
        firedScroll[m] = true;
        track("scroll_depth", { category: "engagement", label: m + "%", value: m });
      }
    }
  }

  function onScroll() {
    if (scrollTicking) return;
    scrollTicking = true;
    (window.requestAnimationFrame || function (cb) { setTimeout(cb, 16); })(evaluateScroll);
  }

  /* ---------------------------------------------------------------
   * Wire-up (deferable; runs whenever loaded)
   * ------------------------------------------------------------- */
  function init() {
    document.addEventListener("click", onClick, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    evaluateScroll(); // catch a page that loads already scrolled / too short to scroll
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }

  // Expose the helper so other code (or tests) can reuse the exact shape.
  window.CDLAnalytics = { track: track, _pageType: pageType, _sanitize: sanitizeLabel };
})();
