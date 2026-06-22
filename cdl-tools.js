/* =====================================================================
 * cdl-tools.js - Cercle des Langues shared lead-capture module
 * ---------------------------------------------------------------------
 * One modal, one HubSpot submit, one brand-compliant design system,
 * shared across every interactive tool (dictée, Word Catcher, ...).
 *
 * Brand charter (cercle-des-langues-brand) is baked in:
 *   - Montserrat, Vert CDL #1ABC9C, Jaune CDL #FFC400, texte #263238
 *   - Functional red #C5283D (errors only), rounded corners, subtle shadow
 *   - CEFR level colours, hyphens only (no em/en dashes)
 * Wording rules (Bénédicte): CTA "Réserver mon bilan offert",
 *   "conseiller pédagogique" (not professeur), vouvoiement.
 *
 * Two integration modes:
 *   A - owned code calls CDLTools.openModal({...}) directly (dictée).
 *   B - Shadow-DOM / external tools emit window.dataLayer events;
 *       this module intercepts them and opens the modal (Word Catcher).
 * ===================================================================== */
(function () {
  "use strict";

  if (window.CDLTools && window.CDLTools.__ready) return; // singleton guard

  /* ---------------------------------------------------------------
   * Design tokens (from the brand charter)
   * ------------------------------------------------------------- */
  var TOKENS = {
    green:     "#1ABC9C",
    gold:      "#FFC400",
    text:      "#263238",
    textSoft:  "#6F6F6F",
    red:       "#C5283D",
    white:     "#FFFFFF",
    fieldBorder: "#D7D7D7",
    radiusField: "8px",   // radius-sm - boutons, champs
    radiusCard:  "16px",  // radius-lg - modales
    radiusPill:  "20px",  // radius-pill - badges, pills
    shadow:    "0 0 24px rgba(38,50,56,.15)" // distance 0, flou moyen, sans couleur
  };

  // CEFR level badge colours (charter)
  var CEFR = {
    A1: { bg: "#E0F6F1", fg: "#04342C" },
    A2: { bg: "#78CFBE", fg: "#04342C" },
    B1: { bg: "#1ABC9C", fg: "#FFFFFF" },
    B2: { bg: "#15967D", fg: "#FFFFFF" },
    C1: { bg: "#0A6B5A", fg: "#FFFFFF" },
    C2: { bg: "#04342C", fg: "#FFFFFF" }
  };

  var DEFAULT_CTA      = "Réserver mon bilan offert";
  var DEFAULT_DISMISS  = "Non merci";
  var DEFAULT_SUCCESS_BTN = "Continuer";

  /* ---------------------------------------------------------------
   * State
   * ------------------------------------------------------------- */
  var registry = {};            // toolId -> config
  var submitted = false;        // global: once a contact is captured, do not nag again
  var interceptorInstalled = false;
  var current = null;           // { config, trigger, segment, score, level }

  // DOM refs (populated after injection)
  var el = {};

  /* ---------------------------------------------------------------
   * Analytics helper - pushes the EXACT standard event shape used by
   * cdl-analytics.js (flat keys, cdl_ prefix). Built identically so the
   * payload shape is byte-identical across both files. NEVER pushes PII.
   * ------------------------------------------------------------- */
  var ANALYTICS_MAX_LABEL = 80;

  function analyticsPageType() {
    var p = (window.location.pathname || "").toLowerCase();
    if (p === "/" || p === "") return "home";
    if (p.indexOf("/test-niveau") !== -1) return "hub";   // tools hub: /test-niveau-anglais
    if (p.indexOf("/test-anglais/") !== -1) return "game";
    if (p.indexOf("/blog") !== -1) return "blog";
    if (p.indexOf("/formation") !== -1) return "formation";
    if (p.indexOf("/landing") !== -1 || p.indexOf("/lp") !== -1) return "landing";
    return "other";
  }

  function analyticsSanitize(v) {
    if (v == null) return null;
    var s = String(v).replace(/\s+/g, " ").trim();
    if (!s) return null;
    return s.length > ANALYTICS_MAX_LABEL ? s.slice(0, ANALYTICS_MAX_LABEL) : s;
  }

  function track(name, params) {
    params = params || {};
    var dl = (window.dataLayer = window.dataLayer || []);
    var payload = {
      event:     "cdl_" + name,
      tool:      params.tool != null ? params.tool : null,
      page_type: analyticsPageType(),
      page_path: window.location.pathname,
      category:  params.category != null ? params.category : null,
      label:     params.label != null ? analyticsSanitize(params.label) : null,
      value:     params.value != null ? params.value : null
    };
    if (params.level != null) payload.level = params.level;
    // Push raw so the Mode B interceptor (handleDataLayerEvent) ignores it:
    // it only matches a configured dataLayerTrigger.event, never cdl_*.
    dl.push(payload);
  }

  /* ---------------------------------------------------------------
   * Brand assets - Montserrat (charter primary font)
   * ------------------------------------------------------------- */
  function ensureFont() {
    if (document.querySelector("link[data-cdl-font]")) return;
    var l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap";
    l.setAttribute("data-cdl-font", "");
    document.head.appendChild(l);
  }

  /* ---------------------------------------------------------------
   * CSS (built from tokens)
   * ------------------------------------------------------------- */
  function injectStyles() {
    if (document.getElementById("cdl-tools-style")) return;
    var css = [
      ".cdl-modal{position:fixed;inset:0;z-index:99999;display:none;align-items:center;justify-content:center;padding:20px;font-family:'Montserrat',sans-serif}",
      ".cdl-modal.is-open{display:flex}",
      ".cdl-modal__overlay{position:absolute;inset:0;background:rgba(38,50,56,.55);backdrop-filter:blur(2px)}",
      ".cdl-modal__card{position:relative;z-index:1;width:100%;max-width:420px;background:" + TOKENS.white + ";border-radius:" + TOKENS.radiusCard + ";padding:32px 28px;text-align:center;box-shadow:" + TOKENS.shadow + ";animation:cdlPop .25s ease-out}",
      "@keyframes cdlPop{from{transform:translateY(8px);opacity:0}to{transform:translateY(0);opacity:1}}",
      ".cdl-modal__badge{display:inline-block;margin:0 0 14px;padding:5px 14px;border-radius:" + TOKENS.radiusPill + ";font-size:.72rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase}",
      ".cdl-modal__title{margin:0 0 10px;color:" + TOKENS.text + ";font-size:1.3rem;font-weight:700;line-height:1.3}",
      ".cdl-modal__text{margin:0 0 20px;color:" + TOKENS.text + ";font-size:.95rem;line-height:1.5;opacity:.85}",
      ".cdl-modal__input{width:100%;box-sizing:border-box;margin:0 0 12px;padding:13px 16px;border:1.5px solid " + TOKENS.fieldBorder + ";border-radius:" + TOKENS.radiusField + ";font-family:inherit;font-size:1rem;color:" + TOKENS.text + ";transition:border-color .15s}",
      ".cdl-modal__input:focus{outline:none;border-color:" + TOKENS.green + "}",
      ".cdl-modal__error{margin:0 0 12px;text-align:left;color:" + TOKENS.red + ";font-size:.85rem}",
      ".cdl-modal__btn{width:100%;cursor:pointer;padding:14px 18px;background:" + TOKENS.gold + ";color:" + TOKENS.text + ";border:none;border-radius:" + TOKENS.radiusField + ";font-family:inherit;font-size:1rem;font-weight:700;transition:filter .15s,opacity .15s}",
      ".cdl-modal__btn:hover{filter:brightness(.96)}",
      ".cdl-modal__btn:disabled{opacity:.6;cursor:default}",
      ".cdl-modal__legal{margin:12px 0 0;color:" + TOKENS.textSoft + ";font-size:.72rem;line-height:1.4}",
      ".cdl-modal__legal a{color:inherit}",
      ".cdl-modal__dismiss{margin-top:14px;background:none;border:none;cursor:pointer;color:" + TOKENS.text + ";opacity:.6;font-family:inherit;font-size:.85rem;text-decoration:underline}",
      ".cdl-modal__dismiss:hover{opacity:.9}",
      ".cdl-modal [hidden]{display:none!important}"
    ].join("");
    var s = document.createElement("style");
    s.id = "cdl-tools-style";
    s.textContent = css;
    document.head.appendChild(s);
  }

  /* ---------------------------------------------------------------
   * Modal markup (injected once into document.body)
   * NB: lives on the page, OUTSIDE any tool's shadow root.
   * ------------------------------------------------------------- */
  function injectModal() {
    if (document.getElementById("cdl-modal")) return;
    if (!document.body) {
      // Registered from <head> before the body is parsed (Mode B snippet).
      // Defer the DOM injection; the interceptor is installed independently.
      document.addEventListener("DOMContentLoaded", injectModal, { once: true });
      return;
    }
    var wrap = document.createElement("div");
    wrap.innerHTML =
      '<div id="cdl-modal" class="cdl-modal" aria-hidden="true">' +
        '<div class="cdl-modal__overlay" data-cdl-dismiss></div>' +
        '<div class="cdl-modal__card" role="dialog" aria-modal="true" aria-labelledby="cdl-modal-title">' +
          '<div id="cdl-modal-form-view">' +
            '<span id="cdl-modal-badge" class="cdl-modal__badge" hidden></span>' +
            '<h2 id="cdl-modal-title" class="cdl-modal__title"></h2>' +
            '<p id="cdl-modal-text" class="cdl-modal__text"></p>' +
            '<form id="cdl-modal-form" novalidate>' +
              '<input type="text"  id="cdl-modal-firstname" class="cdl-modal__input" placeholder="Prénom" autocomplete="given-name" required />' +
              '<input type="text"  id="cdl-modal-lastname"  class="cdl-modal__input" placeholder="Nom" autocomplete="family-name" required />' +
              '<input type="tel"   id="cdl-modal-phone"     class="cdl-modal__input" placeholder="Numéro de téléphone" autocomplete="tel" required />' +
              '<input type="email" id="cdl-modal-email"     class="cdl-modal__input" placeholder="Adresse email" autocomplete="email" required />' +
              '<p id="cdl-modal-error" class="cdl-modal__error" hidden></p>' +
              '<button type="submit" id="cdl-modal-submit" class="cdl-modal__btn"></button>' +
            '</form>' +
            '<p class="cdl-modal__legal">En validant, vous acceptez d\'être recontacté(e). Voir notre <a href="/cgu/politique-de-confidentialite" target="_blank" rel="noopener">politique de confidentialité</a>.</p>' +
            '<button type="button" id="cdl-modal-dismiss" class="cdl-modal__dismiss" data-cdl-dismiss></button>' +
          '</div>' +
          '<div id="cdl-modal-success-view" hidden>' +
            '<h2 class="cdl-modal__title">Merci !</h2>' +
            '<p class="cdl-modal__text">Un conseiller pédagogique vous rappelle très vite pour votre bilan offert.</p>' +
            '<button type="button" id="cdl-modal-success-btn" class="cdl-modal__btn" data-cdl-dismiss></button>' +
          '</div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(wrap.firstChild);

    el.modal       = document.getElementById("cdl-modal");
    el.badge       = document.getElementById("cdl-modal-badge");
    el.title       = document.getElementById("cdl-modal-title");
    el.text        = document.getElementById("cdl-modal-text");
    el.form        = document.getElementById("cdl-modal-form");
    el.firstname   = document.getElementById("cdl-modal-firstname");
    el.lastname    = document.getElementById("cdl-modal-lastname");
    el.phone       = document.getElementById("cdl-modal-phone");
    el.email       = document.getElementById("cdl-modal-email");
    el.error       = document.getElementById("cdl-modal-error");
    el.submit      = document.getElementById("cdl-modal-submit");
    el.dismiss     = document.getElementById("cdl-modal-dismiss");
    el.formView    = document.getElementById("cdl-modal-form-view");
    el.successView = document.getElementById("cdl-modal-success-view");
    el.successBtn  = document.getElementById("cdl-modal-success-btn");

    el.form.addEventListener("submit", onSubmit);
    el.modal.addEventListener("click", function (e) {
      if (e.target.hasAttribute("data-cdl-dismiss")) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && el.modal.classList.contains("is-open")) closeModal();
    });
  }

  function ensureMounted() {
    ensureFont();
    injectStyles();
    injectModal();
  }

  /* ---------------------------------------------------------------
   * Validation + HubSpot submit
   * ------------------------------------------------------------- */
  function isValidEmail(v) { return typeof v === "string" && v.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

  function buildFields(cfg, firstname, lastname, phone, email) {
    var fields = [
      { objectTypeId: "0-1", name: "firstname", value: firstname },
      { objectTypeId: "0-1", name: "lastname",  value: lastname },
      { objectTypeId: "0-1", name: "phone",     value: phone },
      { objectTypeId: "0-1", name: "email",     value: email }
    ];
    // static per-tool stamps (e.g. outil_source)
    var hidden = cfg.hiddenFields || {};
    Object.keys(hidden).forEach(function (k) {
      fields.push({ objectTypeId: "0-1", name: k, value: String(hidden[k]) });
    });
    // dynamic stamps from the trigger context
    if (current && current.level && CEFR[current.level]) {
      fields.push({ objectTypeId: "0-1", name: "niveau_atteint", value: current.level });
    }
    if (current && current.score != null) {
      fields.push({ objectTypeId: "0-1", name: "score", value: String(current.score) });
    }
    return fields;
  }

  function submitToHubSpot(cfg, fields, signal) {
    var endpoint = "https://api.hsforms.com/submissions/v3/integration/submit/" + cfg.portalId + "/" + cfg.formId;
    // NB: hubspotutk tracker intentionally NOT sent - avoids transmitting a tracking
    // cookie to HubSpot (US) without prior consent (CNIL/ePrivacy). The lead still
    // lands; we only lose HubSpot visitor-session attribution. Acceptable tradeoff.
    var ctx = { pageUri: window.location.href, pageName: document.title };
    var opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ submittedAt: Date.now(), fields: fields, context: ctx })
    };
    if (signal) opts.signal = signal;  // optional abort/timeout (modal call passes none -> unchanged)
    return fetch(endpoint, opts).then(function (res) {
      if (!res.ok) throw new Error("HubSpot " + res.status);
      return res.json();
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    if (submitted) return;
    var cfg = current && current.config;
    if (!cfg) return;

    var firstname = el.firstname.value.trim();
    var lastname  = el.lastname.value.trim();
    var phone     = el.phone.value.trim();
    var email     = el.email.value.trim();

    if (!firstname || !lastname || !phone || !isValidEmail(email)) {
      el.error.textContent = "Merci de remplir tous les champs.";
      el.error.hidden = false;
      return;
    }
    el.error.hidden = true;
    var label = el.submit.textContent;
    el.submit.disabled = true;
    el.submit.textContent = "Envoi...";

    submitToHubSpot(cfg, buildFields(cfg, firstname, lastname, phone, email))
      .then(function () {
        submitted = true;
        el.formView.hidden = true;
        el.successView.hidden = false;
        // Analytics: lead captured. NO PII - only trigger label + score.
        track("cta_submitted", {
          category: "game",
          tool:  current && current.config && current.config.toolId,
          label: current && current.trigger,
          value: current && current.score != null ? current.score : null
        });
      })
      .catch(function (err) {
        console.error("[CDLTools]", err);
        el.error.textContent = "Oups, un souci est survenu. Réessayez dans un instant.";
        el.error.hidden = false;
      })
      .then(function () {
        el.submit.disabled = false;
        el.submit.textContent = label;
      });
  }

  /* ---------------------------------------------------------------
   * Public lead submit - reuses the EXACT HubSpot method above with
   * NO modal involved. For inline forms (e.g. the PDF lead magnet on a
   * blog article). Same endpoint, same payload shape, same no-hutk rule
   * - just a different field source. Does NOT touch the modal or its
   * submit path. NEVER puts PII into analytics.
   *
   * DECOUPLED from the modal's global `submitted` nag-lock on purpose:
   * each deliberate inline submission ALWAYS POSTs (a second article block
   * with a different outil_source, or a session where the game modal was
   * submitted earlier, must still reach HubSpot). HubSpot dedupes by email
   * server-side. We neither read nor set `submitted` here, so multi-block /
   * multi-tool sessions never silently drop a lead, and the modal's
   * "do not nag again" behaviour is left exactly as-is.
   *
   *   CDLTools.submitLead({
   *     portalId, formId,
   *     contact: { firstname, lastname, phone, email },
   *     hiddenFields: { outil_source: "..." }
   *   }) -> Promise
   * ------------------------------------------------------------- */
  function submitLead(opts) {
    opts = opts || {};
    if (!opts.portalId || !opts.formId) {
      return Promise.reject(new Error("[CDLTools] submitLead: portalId and formId required"));
    }
    var c = opts.contact || {};
    var email = (c.email == null ? "" : String(c.email)).trim();
    if (!isValidEmail(email)) {
      return Promise.reject(new Error("[CDLTools] submitLead: invalid email"));
    }
    var fields = [];
    ["firstname", "lastname", "phone", "email"].forEach(function (k) {
      var v = c[k];
      if (v != null && String(v).trim() !== "") {
        fields.push({ objectTypeId: "0-1", name: k, value: String(v).trim() });
      }
    });
    var hidden = opts.hiddenFields || {};
    Object.keys(hidden).forEach(function (k) {
      fields.push({ objectTypeId: "0-1", name: k, value: String(hidden[k]) });
    });
    // Client-side timeout so a hung/slow HubSpot POST cannot leave the caller's
    // form stuck forever (the embed's .catch then restores the button + shows an
    // error). Modal path is unaffected - it calls submitToHubSpot without a signal.
    var controller = (typeof AbortController !== "undefined") ? new AbortController() : null;
    var timeoutMs = opts.timeoutMs || 15000;
    var timer = controller ? setTimeout(function () { try { controller.abort(); } catch (e) {} }, timeoutMs) : null;
    return submitToHubSpot({ portalId: opts.portalId, formId: opts.formId }, fields, controller && controller.signal)
      .then(function (res) { if (timer) clearTimeout(timer); return res; },
            function (err) { if (timer) clearTimeout(timer); throw err; });
  }

  /* ---------------------------------------------------------------
   * Copy lookup
   * ------------------------------------------------------------- */
  function resolveCopy(cfg, trigger, segment) {
    var byTrigger = (cfg.copy && cfg.copy[trigger]) || {};
    return byTrigger[segment] || byTrigger["default"] || { title: "Bravo !", text: "" };
  }

  /* ---------------------------------------------------------------
   * Open / close
   * ------------------------------------------------------------- */
  function openModal(opts) {
    opts = opts || {};
    var cfg = registry[opts.toolId];
    if (!cfg) { console.error("[CDLTools] unknown toolId:", opts.toolId); return; }
    ensureMounted();

    // Already open (e.g. a background game-over event while a streak form is up):
    // never wipe an open form.
    if (el.modal && el.modal.classList.contains("is-open")) return;

    current = {
      config:  cfg,
      trigger: opts.trigger || "win",
      segment: opts.segment != null ? opts.segment : "default",
      score:   opts.score,
      level:   opts.level || null
    };

    var copy = resolveCopy(cfg, current.trigger, current.segment);
    el.title.textContent = opts.title || copy.title;   // optional dynamic override (e.g. "Série de 7 !")
    el.text.textContent  = opts.text  || copy.text;

    // CEFR badge (only for valid level codes)
    if (current.level && CEFR[current.level]) {
      el.badge.textContent = "Niveau " + current.level;
      el.badge.style.background = CEFR[current.level].bg;
      el.badge.style.color = CEFR[current.level].fg;
      el.badge.hidden = false;
    } else {
      el.badge.hidden = true;
    }

    // labels (per-tool default + per-open override)
    el.submit.textContent  = opts.cta || cfg.cta || DEFAULT_CTA;
    el.dismiss.textContent = opts.dismissLabel || DEFAULT_DISMISS;
    el.successBtn.textContent = opts.successLabel || DEFAULT_SUCCESS_BTN;

    // reset views + inputs
    el.formView.hidden = false;
    el.successView.hidden = true;
    el.error.hidden = true;
    [el.firstname, el.lastname, el.phone, el.email].forEach(function (i) { i.value = ""; });

    el.modal.classList.add("is-open");
    el.modal.setAttribute("aria-hidden", "false");
    // Analytics: lead-capture modal shown.
    track("cta_shown", {
      category: "game",
      tool:  current.config && current.config.toolId,
      label: current.trigger,
      value: current.score != null ? current.score : null,
      level: current.level || null
    });
    setTimeout(function () { el.firstname.focus(); }, 50);
  }

  function closeModal() {
    if (!el.modal) return;
    el.modal.classList.remove("is-open");
    el.modal.setAttribute("aria-hidden", "true");
    var cfg = current && current.config;
    var ctx = { trigger: current && current.trigger, submitted: submitted };
    // Analytics: modal dismissed. value = 1 if the lead was captured, else 0.
    track("cta_dismissed", {
      category: "game",
      tool:  cfg && cfg.toolId,
      label: current && current.trigger,
      value: submitted ? 1 : 0
    });
    if (cfg && typeof cfg.onClose === "function") {
      try { cfg.onClose(ctx); } catch (e) { console.error("[CDLTools] onClose:", e); }
    }
  }

  /* ---------------------------------------------------------------
   * Mode B - dataLayer interceptor (Shadow-DOM / external tools)
   * ------------------------------------------------------------- */
  function resolveBand(triggerCfg, score) {
    // triggerCfg.resolve: ordered [{ max, trigger, segment }, ...]; last = catch-all
    var rules = triggerCfg.resolve || [];
    for (var i = 0; i < rules.length; i++) {
      var r = rules[i];
      if (r.max == null || score <= r.max) return r;
    }
    return rules.length ? rules[rules.length - 1] : { trigger: "win", segment: "default" };
  }

  function handleDataLayerEvent(obj) {
    if (!obj || !obj.event) return;
    Object.keys(registry).forEach(function (toolId) {
      var cfg = registry[toolId];
      var t = cfg.dataLayerTrigger;
      if (!t || t.event !== obj.event) return;
      if (submitted) return; // do not nag a captured lead
      var score = obj[t.scoreField || "score"];
      var band = resolveBand(t, Number(score) || 0);
      openModal({
        toolId: toolId,
        trigger: band.trigger,
        segment: band.segment,
        score: score,
        level: band.level || null,
        dismissLabel: band.dismissLabel,
        successLabel: band.successLabel
      });
    });
  }

  function installInterceptor() {
    if (interceptorInstalled) return;
    interceptorInstalled = true;
    var w = window;
    w.dataLayer = w.dataLayer || [];
    var orig = w.dataLayer.push.bind(w.dataLayer);
    w.dataLayer.push = function (obj) {
      try { handleDataLayerEvent(obj); } catch (e) { console.error("[CDLTools] dataLayer:", e); }
      return orig(obj);
    };
  }

  /* ---------------------------------------------------------------
   * Public API
   * ------------------------------------------------------------- */
  function register(cfg) {
    if (!cfg || !cfg.toolId) { console.error("[CDLTools] register needs a toolId"); return; }
    registry[cfg.toolId] = cfg;
    // Install the interceptor FIRST so a deferred DOM mount can never block it.
    if (cfg.dataLayerTrigger) installInterceptor();
    ensureMounted();
  }

  window.CDLTools = {
    __ready: true,
    register: register,
    openModal: openModal,
    closeModal: closeModal,
    submitLead: submitLead,
    track: track,
    hasSubmitted: function () { return submitted; },
    // exposed for testing / advanced use
    _tokens: TOKENS,
    _cefr: CEFR
  };

  // If the DOM is already there, mount eagerly so the first openModal is instant.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ensureMounted);
  } else {
    ensureMounted();
  }
})();
