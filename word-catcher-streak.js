/* =====================================================================
 * word-catcher-streak.js - Word Catcher streak layer
 * ---------------------------------------------------------------------
 * Word-Catcher-specific glue (kept OUT of the generic cdl-tools.js).
 *
 * The game is sealed in an OPEN shadow root and only emits
 * game_start / game_over on the dataLayer - no streak signal. So we
 * observe its rendered state (score + lives) to derive a streak of
 * consecutive correct catches, then on the first streak of 5:
 *   -> PAUSE the game and POP the shared lead-capture modal.
 * The game resumes when the modal is closed. Later milestones
 * (10, 15, ...) or an already-captured visitor get a lightweight,
 * non-blocking toast instead of re-popping the modal.
 *
 * NB: reading the game's DOM is inherently fragile (depends on its
 * markup). The robust long-term path is to emit a 'word_catcher_streak'
 * dataLayer event from the game source (argenty-cdl/english-word-catcher).
 * This adapter needs no repo access and degrades silently if selectors
 * stop matching (pause/celebrate simply no-op).
 * ===================================================================== */
(function () {
  "use strict";

  var TOOL_ID     = "orthographe-catcher";
  var STREAK_STEP = 5;                                  // celebrate every 5 in a row
  var SCORE_SEL   = ".font-display.font-bold.text-xl";  // game score node
  var LIFE_SEL    = ".fill-red-400";                    // one per remaining life (lucide heart)
  var GAME_SEL    = ".game-container";                  // the game's focusable root (Space toggles pause)
  var POLL_MS     = 150;

  var GREEN = "#1ABC9C";

  var streak = 0, best = 0, lastScore = null, lastLives = null;
  var lastMilestone = 0;        // highest multiple-of-5 already celebrated this run
  var streakModalShown = false; // the pop-up fires once per game
  var wePaused = false;         // true while WE paused the game for the modal
  var root = null;

  /* ---- styles (charter colours, Montserrat) - toast only ---- */
  function injectStyles() {
    if (document.getElementById("wc-streak-style")) return;
    var css =
      "@keyframes wcToastIn{0%{opacity:0;transform:translate(-50%,-12px)}15%{opacity:1;transform:translate(-50%,0)}80%{opacity:1}100%{opacity:0;transform:translate(-50%,-12px)}}" +
      ".wc-toast{position:fixed;top:18px;left:50%;transform:translateX(-50%);z-index:9000;pointer-events:none;" +
      "background:" + GREEN + ";color:#fff;font-family:'Montserrat',sans-serif;font-weight:700;font-size:1rem;" +
      "padding:10px 22px;border-radius:20px;box-shadow:0 0 24px rgba(38,50,56,.2);animation:wcToastIn 1.8s ease forwards}";
    var s = document.createElement("style");
    s.id = "wc-streak-style";
    s.textContent = css;
    document.head.appendChild(s);
  }

  function showToast(n) {
    injectStyles();
    var t = document.createElement("div");
    t.className = "wc-toast";
    t.textContent = "🔥 Série de " + n + " !" + (n >= 10 ? " Impressionnant." : "");
    document.body.appendChild(t);
    setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 1900);
  }

  /* ---- pause / resume the game (Space toggles PLAYING<->PAUSED) ---- */
  function gameContainer() { return root ? root.querySelector(GAME_SEL) : null; }
  function dispatchSpace() {
    var g = gameContainer();
    if (!g) return false;
    try {
      g.dispatchEvent(new KeyboardEvent("keydown", { key: " ", code: "Space", keyCode: 32, which: 32, bubbles: true }));
      return true;
    } catch (e) { return false; }
  }
  function pauseGame()  { if (!wePaused && dispatchSpace()) wePaused = true; }
  function resumeGame() { if (wePaused && dispatchSpace()) wePaused = false; }
  // cdl-tools calls the registered onClose on modal close -> resume the game.
  window.cdlWordCatcherResume = resumeGame;

  function alreadyCaptured() {
    return !!(window.CDLTools && typeof CDLTools.hasSubmitted === "function" && CDLTools.hasSubmitted());
  }

  function openStreakModal(n) {
    if (!window.CDLTools || typeof CDLTools.openModal !== "function") return;
    pauseGame();   // freeze the game behind the pop-up; resumed on close via onClose
    CDLTools.openModal({
      toolId:  TOOL_ID,
      trigger: "streak",
      segment: "streak",
      score:   readScore() != null ? readScore() : n * 10,
      title:   "Série de " + n + " ! Vous êtes en feu."   // dynamic; text comes from the copy registry
    });
  }

  // Fire when the streak CROSSES a new multiple of 5 (so a +20 jump 4->6 still
  // counts milestone 5). First milestone -> pop-up modal; later/captured -> toast.
  function maybeCelebrate() {
    var milestone = Math.floor(streak / STREAK_STEP) * STREAK_STEP;
    if (milestone < STREAK_STEP || milestone <= lastMilestone) return;
    lastMilestone = milestone;
    if (!streakModalShown && !alreadyCaptured()) {
      streakModalShown = true;
      openStreakModal(milestone);
    } else {
      showToast(milestone);
    }
  }

  /* ---- reading the game's rendered state ---- */
  function readScore() {
    if (!root) return null;
    var el = root.querySelector(SCORE_SEL);
    if (!el) return null;
    var v = parseInt((el.textContent || "").replace(/[^\d-]/g, ""), 10);
    return isNaN(v) ? null : v;
  }
  function readLives() {
    if (!root) return null;
    return root.querySelectorAll(LIFE_SEL).length;
  }

  function poll() {
    var s = readScore(), l = readLives();
    if (s == null || l == null) return;
    if (lastScore == null) { lastScore = s; lastLives = l; return; }

    if (s < lastScore || l > lastLives) {
      // new game / restart
      streak = 0; lastMilestone = 0; streakModalShown = false; wePaused = false;
    } else if (l < lastLives) {
      streak = 0; lastMilestone = 0;       // lost a life -> streak broken
    } else if (s > lastScore) {
      streak += Math.round((s - lastScore) / 10);   // each +10 = one good action
      if (streak > best) best = streak;
      maybeCelebrate();
    }
    lastScore = s; lastLives = l;
  }

  /* ---- boot: wait for the game's shadow root, then poll ---- */
  function boot() {
    var waited = 0;
    var t = setInterval(function () {
      var wc = document.querySelector("word-catcher");
      if (wc && wc.shadowRoot) {
        root = wc.shadowRoot;
        clearInterval(t);
        injectStyles();
        setInterval(poll, POLL_MS);
      } else if ((waited += 200) > 20000) {
        clearInterval(t);   // give up quietly after 20s
      }
    }, 200);
  }

  // Test hook: window.__wcStreakTest(7) forces the streak path without playing.
  window.__wcStreakTest = function (n) { injectStyles(); streak = n; best = Math.max(best, n); maybeCelebrate(); };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
