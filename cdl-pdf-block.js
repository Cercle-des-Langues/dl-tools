/* cdl-pdf-block.js - self-mounting PDF lead-magnet block for CDL articles.
 * Put <div data-cdl-pdf></div> anywhere in an article; this script injects the
 * form + styles and runs it. Needs cdl-tools.js + cdl-pdf.js loaded site-wide.
 * Generated from pdf-download-embed.html - rebuild from there. */
(function(){"use strict";if(window.__cdlPdfBlockMounted)return;window.__cdlPdfBlockMounted=true;
function u8(b){var s=atob(b),a=new Uint8Array(s.length);for(var i=0;i<s.length;i++)a[i]=s.charCodeAt(i);return new TextDecoder("utf-8").decode(a);}
var BLOB="PGRpdiBjbGFzcz0iY2RsLXBkZi1ibG9jayI+CiAgPGRpdiBjbGFzcz0iY2RsLXBkZi1ibG9ja19fYWNjZW50Ij48L2Rpdj4KICA8ZGl2IGNsYXNzPSJjZGwtcGRmLWJsb2NrX19ib2R5Ij4KICAgIDxwIGNsYXNzPSJjZGwtcGRmLWJsb2NrX19leWVicm93IiBkYXRhLWNkbD0iZXllYnJvdyI+RmljaGUtbcOpbW8gb2ZmZXJ0ZTwvcD4KICAgIDxoMyBjbGFzcz0iY2RsLXBkZi1ibG9ja19fdGl0bGUiIGRhdGEtY2RsPSJoZWFkaW5nIj5SZWNldmV6IHZvdHJlIGZpY2hlLW3DqW1vIGVuIFBERjwvaDM+CiAgICA8cCBjbGFzcz0iY2RsLXBkZi1ibG9ja19fdmFsdWUiIGRhdGEtY2RsPSJ2YWx1ZSI+TGVzIDUwMCBtb3RzIGFuZ2xhaXMgbGVzIHBsdXMgZnLDqXF1ZW50cywgY2xhc3PDqXMgcGFyIHRow6htZS48L3A+CgogICAgPGZvcm0gY2xhc3M9ImNkbC1wZGYtYmxvY2tfX2Zvcm0iIGRhdGEtY2RsPSJmb3JtIiBub3ZhbGlkYXRlPgogICAgICA8ZGl2IGNsYXNzPSJjZGwtcGRmLWJsb2NrX19yb3ciPgogICAgICAgIDxsYWJlbCBjbGFzcz0iY2RsLXBkZi1ibG9ja19fZmllbGQiPgogICAgICAgICAgPHNwYW4gY2xhc3M9ImNkbC1wZGYtYmxvY2tfX2xhYmVsIj5QcsOpbm9tPC9zcGFuPgogICAgICAgICAgPGlucHV0IHR5cGU9InRleHQiIGNsYXNzPSJjZGwtcGRmLWJsb2NrX19pbnB1dCIgZGF0YS1jZGw9ImZpcnN0bmFtZSIgcGxhY2Vob2xkZXI9IlByw6lub20iIGF1dG9jb21wbGV0ZT0iZ2l2ZW4tbmFtZSIgcmVxdWlyZWQgYXJpYS1yZXF1aXJlZD0idHJ1ZSIgLz4KICAgICAgICA8L2xhYmVsPgogICAgICAgIDxsYWJlbCBjbGFzcz0iY2RsLXBkZi1ibG9ja19fZmllbGQiPgogICAgICAgICAgPHNwYW4gY2xhc3M9ImNkbC1wZGYtYmxvY2tfX2xhYmVsIj5Ob20gKGZhY3VsdGF0aWYpPC9zcGFuPgogICAgICAgICAgPGlucHV0IHR5cGU9InRleHQiIGNsYXNzPSJjZGwtcGRmLWJsb2NrX19pbnB1dCIgZGF0YS1jZGw9Imxhc3RuYW1lIiBwbGFjZWhvbGRlcj0iTm9tIChmYWN1bHRhdGlmKSIgYXV0b2NvbXBsZXRlPSJmYW1pbHktbmFtZSIgLz4KICAgICAgICA8L2xhYmVsPgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0iY2RsLXBkZi1ibG9ja19fcm93Ij4KICAgICAgICA8bGFiZWwgY2xhc3M9ImNkbC1wZGYtYmxvY2tfX2ZpZWxkIj4KICAgICAgICAgIDxzcGFuIGNsYXNzPSJjZGwtcGRmLWJsb2NrX19sYWJlbCI+QWRyZXNzZSBlbWFpbDwvc3Bhbj4KICAgICAgICAgIDxpbnB1dCB0eXBlPSJlbWFpbCIgY2xhc3M9ImNkbC1wZGYtYmxvY2tfX2lucHV0IiBkYXRhLWNkbD0iZW1haWwiIHBsYWNlaG9sZGVyPSJBZHJlc3NlIGVtYWlsIiBhdXRvY29tcGxldGU9ImVtYWlsIiByZXF1aXJlZCBhcmlhLXJlcXVpcmVkPSJ0cnVlIiAvPgogICAgICAgIDwvbGFiZWw+CiAgICAgIDwvZGl2PgogICAgICA8cCBjbGFzcz0iY2RsLXBkZi1ibG9ja19fZXJyb3IiIGRhdGEtY2RsPSJlcnJvciIgcm9sZT0iYWxlcnQiIGhpZGRlbj48L3A+CiAgICAgIDxidXR0b24gdHlwZT0ic3VibWl0IiBjbGFzcz0iY2RsLXBkZi1ibG9ja19fYnRuIiBkYXRhLWNkbD0ic3VibWl0Ij5SZWNldm9pciBtYSBmaWNoZSBQREY8L2J1dHRvbj4KICAgIDwvZm9ybT4KCiAgICA8cCBjbGFzcz0iY2RsLXBkZi1ibG9ja19fbGVnYWwiIGRhdGEtY2RsPSJsZWdhbCI+CiAgICAgIEVuIHTDqWzDqWNoYXJnZWFudCBjZXR0ZSBmaWNoZSwgdm91cyBhY2NlcHRleiBkJ8OqdHJlIHJlY29udGFjdMOpKGUpIHBhciB1biBjb25zZWlsbGVyIHDDqWRhZ29naXF1ZQogICAgICBldCBkZSByZWNldm9pciBub3MgY29uc2VpbHMgcGFyIGVtYWlsLiBEw6lzaW5zY3JpcHRpb24gcG9zc2libGUgw6AgdG91dCBtb21lbnQuCiAgICAgIFZvaXIgbm90cmUgPGEgaHJlZj0iL2NndS9wb2xpdGlxdWUtZGUtY29uZmlkZW50aWFsaXRlIiB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciI+cG9saXRpcXVlIGRlIGNvbmZpZGVudGlhbGl0w6k8L2E+LgogICAgPC9wPgoKICAgIDxkaXYgY2xhc3M9ImNkbC1wZGYtYmxvY2tfX3N1Y2Nlc3MiIGRhdGEtY2RsPSJzdWNjZXNzIiBoaWRkZW4+CiAgICAgIDxoMyBjbGFzcz0iY2RsLXBkZi1ibG9ja19fc3VjY2Vzcy10aXRsZSIgZGF0YS1jZGw9InN1Y2Nlc3MtdGl0bGUiIHRhYmluZGV4PSItMSI+UGFyZmFpdCAhPC9oMz4KICAgICAgPHAgY2xhc3M9ImNkbC1wZGYtYmxvY2tfX3N1Y2Nlc3MtdGV4dCIgZGF0YS1jZGw9InN1Y2Nlc3MtdGV4dCI+CiAgICAgICAgVm90cmUgZmljaGUgZXN0IHByw6p0ZS4gU2kgbGUgdMOpbMOpY2hhcmdlbWVudCBuZSBkw6ltYXJyZSBwYXMsIHV0aWxpc2V6IGxlIGJvdXRvbiBjaS1kZXNzb3VzLgogICAgICAgIFVuIGNvbnNlaWxsZXIgcMOpZGFnb2dpcXVlIHBldXQgdm91cyBhY2NvbXBhZ25lciBwb3VyIGFsbGVyIHBsdXMgbG9pbi4KICAgICAgPC9wPgogICAgICA8YSBjbGFzcz0iY2RsLXBkZi1ibG9ja19fYnRuIGNkbC1wZGYtYmxvY2tfX2Rvd25sb2FkIiBkYXRhLWNkbD0iZG93bmxvYWQiIGhpZGRlbj5Uw6lsw6ljaGFyZ2VyIG1hIGZpY2hlIFBERjwvYT4KICAgIDwvZGl2PgogIDwvZGl2Pgo8L2Rpdj4KCjxzdHlsZT4KICAuY2RsLXBkZi1ibG9ja3sKICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0JywtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCwnU2Vnb2UgVUknLFJvYm90byxzYW5zLXNlcmlmOwogICAgbWF4LXdpZHRoOjU2MHB4O21hcmdpbjozMnB4IGF1dG87YmFja2dyb3VuZDojRkZGRkZGO2JvcmRlci1yYWRpdXM6MTZweDsKICAgIGJveC1zaGFkb3c6MCAwIDI0cHggcmdiYSgzOCw1MCw1NiwuMTIpO292ZXJmbG93OmhpZGRlbjtjb2xvcjojMjYzMjM4OwogIH0KICAuY2RsLXBkZi1ibG9ja19fYWNjZW50e2hlaWdodDo2cHg7YmFja2dyb3VuZDojMUFCQzlDO30KICAuY2RsLXBkZi1ibG9ja19fYm9keXtwYWRkaW5nOjI2cHggMjhweCAyNHB4O30KICAuY2RsLXBkZi1ibG9ja19fZXllYnJvd3sKICAgIG1hcmdpbjowIDAgOHB4O2ZvbnQtc2l6ZTouNzJyZW07Zm9udC13ZWlnaHQ6NzAwO2xldHRlci1zcGFjaW5nOi4wOGVtOwogICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2NvbG9yOiMxNTk2N0Q7CiAgfQogIC5jZGwtcGRmLWJsb2NrX190aXRsZXttYXJnaW46MCAwIDhweDtmb250LXNpemU6MS4yNXJlbTtmb250LXdlaWdodDo3MDA7bGluZS1oZWlnaHQ6MS4zO2NvbG9yOiMyNjMyMzg7fQogIC5jZGwtcGRmLWJsb2NrX192YWx1ZXttYXJnaW46MCAwIDE4cHg7Zm9udC1zaXplOi45NXJlbTtsaW5lLWhlaWdodDoxLjU7Y29sb3I6IzZGNkY2Rjt9CiAgLmNkbC1wZGYtYmxvY2tfX3Jvd3tkaXNwbGF5OmZsZXg7Z2FwOjEwcHg7fQogIC5jZGwtcGRmLWJsb2NrX19yb3cgKyAuY2RsLXBkZi1ibG9ja19fcm93e21hcmdpbi10b3A6MTBweDt9CiAgLmNkbC1wZGYtYmxvY2tfX2ZpZWxke2ZsZXg6MTttaW4td2lkdGg6MDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21hcmdpbjowO30KICAvKiBWaXN1YWxseS1oaWRkZW4gYnV0IGF2YWlsYWJsZSB0byBhc3Npc3RpdmUgdGVjaCAobGFiZWwgd3JhcHMgaXRzIGlucHV0KSAqLwogIC5jZGwtcGRmLWJsb2NrX19sYWJlbHsKICAgIHBvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweDtoZWlnaHQ6MXB4O3BhZGRpbmc6MDttYXJnaW46LTFweDtvdmVyZmxvdzpoaWRkZW47CiAgICBjbGlwOnJlY3QoMCAwIDAgMCk7d2hpdGUtc3BhY2U6bm93cmFwO2JvcmRlcjowOwogIH0KICAuY2RsLXBkZi1ibG9ja19faW5wdXR7CiAgICB3aWR0aDoxMDAlO2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOjEycHggMTRweDtib3JkZXI6MS41cHggc29saWQgI0Q3RDdENzsKICAgIGJvcmRlci1yYWRpdXM6OHB4O2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjFyZW07Y29sb3I6IzI2MzIzODt0cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMTVzOwogIH0KICAuY2RsLXBkZi1ibG9ja19faW5wdXQ6Zm9jdXN7b3V0bGluZTpub25lO2JvcmRlci1jb2xvcjojMUFCQzlDO30KICAuY2RsLXBkZi1ibG9ja19faW5wdXRbYXJpYS1pbnZhbGlkPSJ0cnVlIl17Ym9yZGVyLWNvbG9yOiNDNTI4M0Q7fQogIC5jZGwtcGRmLWJsb2NrX19waG9uZXtkaXNwbGF5OmZsZXg7Z2FwOjhweDt3aWR0aDoxMDAlO30KICAuY2RsLXBkZi1ibG9ja19fcGhvbmVudW17ZmxleDoxO21pbi13aWR0aDowO30KICAuY2RsLXBkZi1ibG9ja19fZGlhbHsKICAgIGZsZXg6MCAwIGF1dG87d2lkdGg6NDQlO21heC13aWR0aDoxNjBweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzoxMnB4IDEwcHg7CiAgICBib3JkZXI6MS41cHggc29saWQgI0Q3RDdENztib3JkZXItcmFkaXVzOjhweDtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxcmVtOwogICAgY29sb3I6IzI2MzIzODtiYWNrZ3JvdW5kOiNmZmY7dHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjE1czsKICB9CiAgLmNkbC1wZGYtYmxvY2tfX2RpYWw6Zm9jdXN7b3V0bGluZTpub25lO2JvcmRlci1jb2xvcjojMUFCQzlDO30KICAuY2RsLXBkZi1ibG9ja19fZXJyb3J7bWFyZ2luOjEycHggMCAwO2NvbG9yOiNDNTI4M0Q7Zm9udC1zaXplOi44NXJlbTt9CiAgLmNkbC1wZGYtYmxvY2tfX2J0bnsKICAgIGRpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTttYXJnaW4tdG9wOjE0cHg7Y3Vyc29yOnBvaW50ZXI7cGFkZGluZzoxNHB4IDE4cHg7YmFja2dyb3VuZDojRkZDNDAwOwogICAgY29sb3I6IzI2MzIzODtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjhweDtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxcmVtO2ZvbnQtd2VpZ2h0OjcwMDsKICAgIHRleHQtYWxpZ246Y2VudGVyO3RleHQtZGVjb3JhdGlvbjpub25lO2JveC1zaXppbmc6Ym9yZGVyLWJveDt0cmFuc2l0aW9uOmZpbHRlciAuMTVzLG9wYWNpdHkgLjE1czsKICB9CiAgLmNkbC1wZGYtYmxvY2tfX2J0bjpob3ZlcntmaWx0ZXI6YnJpZ2h0bmVzcyguOTYpO30KICAuY2RsLXBkZi1ibG9ja19fYnRuOmRpc2FibGVke29wYWNpdHk6LjY7Y3Vyc29yOmRlZmF1bHQ7fQogIC5jZGwtcGRmLWJsb2NrX19idG46Zm9jdXN7b3V0bGluZToycHggc29saWQgIzFBQkM5QztvdXRsaW5lLW9mZnNldDoycHg7fQogIEBzdXBwb3J0cyBzZWxlY3Rvcig6Zm9jdXMtdmlzaWJsZSl7CiAgICAuY2RsLXBkZi1ibG9ja19fYnRuOmZvY3Vze291dGxpbmU6bm9uZTt9CiAgICAuY2RsLXBkZi1ibG9ja19fYnRuOmZvY3VzLXZpc2libGV7b3V0bGluZToycHggc29saWQgIzFBQkM5QztvdXRsaW5lLW9mZnNldDoycHg7fQogIH0KICAuY2RsLXBkZi1ibG9ja19fbGVnYWx7bWFyZ2luOjE0cHggMCAwO2NvbG9yOiM2RjZGNkY7Zm9udC1zaXplOi43MnJlbTtsaW5lLWhlaWdodDoxLjQ1O30KICAuY2RsLXBkZi1ibG9ja19fbGVnYWwgYXtjb2xvcjojMTU5NjdEO30KICAuY2RsLXBkZi1ibG9ja19fc3VjY2Vzc3t0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjhweCAwIDRweDt9CiAgLmNkbC1wZGYtYmxvY2tfX3N1Y2Nlc3MtdGl0bGV7bWFyZ2luOjAgMCA4cHg7Zm9udC1zaXplOjEuMTVyZW07Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiMxQUJDOUM7b3V0bGluZTpub25lO30KICAuY2RsLXBkZi1ibG9ja19fc3VjY2Vzcy10ZXh0e21hcmdpbjowO2ZvbnQtc2l6ZTouOTVyZW07bGluZS1oZWlnaHQ6MS41O2NvbG9yOiMyNjMyMzg7fQogIC5jZGwtcGRmLWJsb2NrX19kb3dubG9hZHttYXgtd2lkdGg6MjgwcHg7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bzt9CiAgLmNkbC1wZGYtYmxvY2sgW2hpZGRlbl17ZGlzcGxheTpub25lIWltcG9ydGFudDt9CiAgQG1lZGlhKG1heC13aWR0aDo1MjBweCl7LmNkbC1wZGYtYmxvY2tfX3Jvd3tmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjEwcHg7fX0KPC9zdHlsZT4K";
function mountAll(){var ms=document.querySelectorAll("[data-cdl-pdf]");for(var i=0;i<ms.length;i++){if(ms[i].getAttribute("data-cdl-pdf-done"))continue;ms[i].setAttribute("data-cdl-pdf-done","1");ms[i].innerHTML=u8(BLOB);}}
mountAll();if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",mountAll,{once:true});
})();
(function () {
  "use strict";

  /* =========================================================
   * CONFIG - à personnaliser par article. Pilote AUSSI le titre,
   * le sous-titre et l'accroche AFFICHÉS du bloc (source unique).
   * ========================================================= */
  var CONFIG = {
    articleSource: "ARTICLE_SOURCE_ID",        // -> hidden field outil_source (ex: "blog-500-mots")
    portalId: "6034125",
    formId:   "356068dd-9721-4f78-af7c-9df1f09d05ca",  // dedicated PDF-lead form (separate from the games' form)

    // copy AFFICHÉE dans le bloc
    blockEyebrow: "Fiche-mémo offerte",
    blockHeading: "Recevez votre fiche-mémo en PDF",
    blockValue:   "Tout le vocabulaire de cet article réuni dans une fiche PDF, classée par thème - à garder sous la main.",

    // contenu du PDF généré
    pdf: {
      title:    "Les 500 mots anglais les plus fréquents",
      subtitle: "Votre fiche-mémo pour mémoriser le vocabulaire essentiel, classé par thème.",
      level:    "A1",
      filename: "fiche-500-mots-anglais.pdf",
      sections: [
        {
          heading: "Comment utiliser cette fiche",
          type: "text",
          body: "Révisez 10 minutes par jour. Lisez le mot anglais à voix haute, puis sa traduction. "
              + "Couvrez ensuite la colonne française et testez-vous. Un conseiller pédagogique peut "
              + "construire avec vous un plan adapté à votre niveau et à vos objectifs."
        },
        {
          heading: "Les animaux", type: "table", columns: ["Anglais", "Français"],
          rows: [
            ["dog", "chien"], ["cat", "chat"], ["bird", "oiseau"], ["horse", "cheval"],
            ["cow", "vache"], ["sheep", "mouton"], ["pig", "cochon"], ["chicken", "poule"],
            ["fish", "poisson"], ["rabbit", "lapin"], ["mouse", "souris"], ["bear", "ours"]
          ]
        },
        {
          heading: "Les couleurs", type: "table", columns: ["Anglais", "Français"],
          rows: [
            ["red", "rouge"], ["blue", "bleu"], ["green", "vert"], ["yellow", "jaune"],
            ["black", "noir"], ["white", "blanc"], ["orange", "orange"], ["purple", "violet"],
            ["pink", "rose"], ["brown", "marron"], ["grey", "gris"], ["gold", "doré"]
          ]
        }
      ]
    }
  };

  /* =========================================================
   * Shared helpers (module scope)
   * ========================================================= */
  // Per-article source tag for HubSpot + analytics, AUTO-DERIVED from the page URL so the
  // team configures nothing per article. (Override by setting CONFIG.articleSource.)
  var ARTICLE_SOURCE = (CONFIG.articleSource && CONFIG.articleSource !== "ARTICLE_SOURCE_ID")
    ? CONFIG.articleSource
    : ("blog-" + ((location.pathname || "").split("/").filter(Boolean).pop() || "article"));

  function isValidEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= 254; }
  function isTouchDevice() { return ("ontouchstart" in window) || (navigator.maxTouchPoints > 0); }

  /* =========================================================
   * Auto-extract the article's vocabulary into PDF sections.
   * Reads the tables already in the article body - NO manual config needed:
   * each <table> becomes a section, titled by the nearest heading above it;
   * rows = the table cells. Falls back to CONFIG.pdf.sections if no tables found.
   * ========================================================= */
  function extractFicheFromArticle() {
    // Scope to the blog article body (not nav / footer / related-article blocks).
    var container = document.querySelector(".blog-post-content_content-left") ||
                    document.querySelector('[class*="blog-post-content"]') ||
                    document.querySelector("article, main") || document.body;
    // The vocab tables carry class "vocab-table" (inside Webflow embeds); fall back to any table.
    var tableSel = container.querySelector("table.vocab-table") ? "table.vocab-table" : "table";
    // Walk headings + tables in document order so each table inherits the heading above it.
    var nodes = container.querySelectorAll("h1,h2,h3,h4," + tableSel);
    var sections = [], lastHeading = "";
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (/^H[1-6]$/.test(el.tagName)) { lastHeading = (el.textContent || "").replace(/\s+/g, " ").trim(); continue; }
      var rows = extractTableRows(el);
      if (rows.length) {
        sections.push({ heading: lastHeading || ("Vocabulaire " + (sections.length + 1)), type: "table",
                        columns: ["Anglais", "Français"], rows: rows });
      }
    }
    return sections;
  }
  function extractTableRows(table) {
    var trs = table.querySelectorAll("tbody tr");
    if (!trs.length) trs = table.querySelectorAll("tr");
    var rows = [];
    for (var r = 0; r < trs.length; r++) {
      var tds = trs[r].querySelectorAll("td");
      if (!tds.length) continue;                 // header row (<th> only) -> skip
      var vals = [];
      for (var c = 0; c < tds.length; c++) vals.push((tds[c].textContent || "").replace(/\s+/g, " ").trim());
      if (!vals.join("")) continue;              // empty row
      var a = (vals[0] || "").toLowerCase(), b = (vals[1] || "").toLowerCase();
      if ((a.indexOf("vocabulaire angl") > -1 || a === "anglais" || a === "english") &&
          (b.indexOf("traduction") > -1 || b.indexOf("fran") > -1 || b === "french")) continue; // header-as-data row
      rows.push(vals);
    }
    return rows;
  }
  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
           (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  }
  // Mirror cdl-analytics.js page_type rules so the rare inline fallback stays schema-identical.
  function pageType() {
    var p = (location.pathname || "").toLowerCase();
    if (p === "/" || p === "") return "home";
    if (p.indexOf("/test-niveau") !== -1) return "hub";
    if (p.indexOf("/test-anglais/") !== -1) return "game";
    if (p.indexOf("/blog") !== -1) return "blog";
    if (p.indexOf("/formation") !== -1) return "formation";
    if (p.indexOf("/landing") !== -1 || p.indexOf("/lp") !== -1) return "landing";
    return "other";
  }
  // Analytics: prefer the shared helper; the fallback emits the SAME flat shape
  // (page_type included). NEVER pass PII into an analytics event.
  function track(name, params) {
    params = params || {};
    if (window.CDLTools && CDLTools.track) { CDLTools.track(name, params); return; }
    if (window.CDLAnalytics && CDLAnalytics.track) { CDLAnalytics.track(name, params); return; }
    var dl = (window.dataLayer = window.dataLayer || []);
    dl.push({
      event: "cdl_" + name,
      tool: params.tool != null ? params.tool : null,
      page_type: pageType(),
      page_path: location.pathname,
      category: params.category != null ? params.category : null,
      label: params.label != null ? params.label : null,
      value: params.value != null ? params.value : null
    });
  }

  var blockCounter = 0;

  /* =========================================================
   * Per-instance init - every .cdl-pdf-block is independent, so the
   * block can appear multiple times on one page with no id collisions.
   * ========================================================= */
  function initBlock(block) {
    if (block.__cdlInit) return;
    block.__cdlInit = true;
    var idx = ++blockCounter;
    function q(name) { return block.querySelector('[data-cdl="' + name + '"]'); }

    // Config-driven on-page copy (single source of truth)
    if (CONFIG.blockEyebrow != null && q("eyebrow")) q("eyebrow").textContent = CONFIG.blockEyebrow;
    if (CONFIG.blockHeading != null && q("heading")) q("heading").textContent = CONFIG.blockHeading;
    if (CONFIG.blockValue != null && q("value")) q("value").textContent = CONFIG.blockValue;

    var form = q("form"), errorEl = q("error"), submitBtn = q("submit");
    if (!form) return;

    var errorId = "cdl-pdf-error-" + idx;
    errorEl.id = errorId;

    var shownFired = false, lastObjectUrl = null, lastInvalid = null;

    // cta_shown - once, when seen (denominator)
    function fireShown() {
      if (shownFired) return;
      shownFired = true;
      track("cta_shown", { tool: ARTICLE_SOURCE, category: "lead", label: "pdf_fiche" });
    }
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) { fireShown(); io.disconnect(); io = null; break; }
        }
      }, { threshold: 0 });
      io.observe(block);
    } else { fireShown(); }

    function showError(msg, field) {
      errorEl.textContent = msg; errorEl.hidden = false;
      if (lastInvalid) { lastInvalid.removeAttribute("aria-invalid"); lastInvalid.removeAttribute("aria-describedby"); }
      if (field) {
        field.setAttribute("aria-invalid", "true");
        field.setAttribute("aria-describedby", errorId);
        field.focus();
        lastInvalid = field;
      } else {
        // Field-less failure (backend/network): move focus to the alert so
        // screen readers reliably announce it (a toggled role=alert alone is flaky).
        errorEl.setAttribute("tabindex", "-1");
        errorEl.focus();
      }
    }
    function clearError() {
      errorEl.hidden = true; errorEl.textContent = "";
      if (lastInvalid) { lastInvalid.removeAttribute("aria-invalid"); lastInvalid.removeAttribute("aria-describedby"); lastInvalid = null; }
    }

    function showSuccess(pdfResult) {
      form.hidden = true;
      var legal = q("legal"); if (legal) legal.hidden = true;
      var titleEl = q("success-title"), textEl = q("success-text"), success = q("success"), dl = q("download");
      var wired = false, ios = isIOS();

      if (pdfResult && pdfResult.blob) {
        try {
          if (lastObjectUrl) URL.revokeObjectURL(lastObjectUrl);
          lastObjectUrl = URL.createObjectURL(pdfResult.blob);
          dl.href = lastObjectUrl;
          var fn = pdfResult.filename || CONFIG.pdf.filename;
          if (ios) {
            // iOS Safari ignores download on blob URLs; open in the system viewer instead.
            dl.removeAttribute("download"); dl.target = "_blank"; dl.rel = "noopener";
            dl.textContent = "Ouvrir ma fiche PDF";
          } else {
            dl.setAttribute("download", fn); dl.removeAttribute("target");
          }
          dl.hidden = false;
          wired = true;
          // Desktop convenience: auto-trigger. Never on touch (could navigate away).
          if (!isTouchDevice()) { try { dl.click(); } catch (e) {} }
        } catch (e) { wired = false; }
      }

      if (wired) {
        titleEl.textContent = "Parfait !";
        // Copy matches the button: iOS opens the viewer, others download.
        textEl.textContent = ios
          ? "Votre fiche est prête. Appuyez sur le bouton ci-dessous pour l'ouvrir. Un conseiller pédagogique peut vous accompagner pour aller plus loin."
          : "Votre fiche est prête. Si le téléchargement ne démarre pas, utilisez le bouton ci-dessous. Un conseiller pédagogique peut vous accompagner pour aller plus loin.";
      } else {
        titleEl.textContent = "Merci !";
        textEl.textContent =
          "Votre demande est bien reçue. Un conseiller pédagogique vous recontacte très vite pour vous accompagner.";
      }

      success.hidden = false;
      titleEl.focus(); // single announce mechanism (no aria-live to avoid double speech)
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      clearError();

      var firstname = q("firstname").value.trim();
      var lastname  = q("lastname").value.trim();
      var email     = q("email").value.trim();

      // 1. validate - prenom + a valid email (we email the fiche and a conseiller follows up)
      if (!firstname) { showError("Merci d'indiquer votre prénom.", q("firstname")); return; }
      if (!isValidEmail(email)) { showError("Merci d'indiquer une adresse email valide.", q("email")); return; }

      submitBtn.disabled = true;
      form.setAttribute("aria-busy", "true");
      var btnLabel = submitBtn.textContent;
      submitBtn.textContent = "Envoi...";
      function restoreBtn() { submitBtn.disabled = false; form.removeAttribute("aria-busy"); submitBtn.textContent = btnLabel; }

      // 2. HubSpot via the shared method (no parallel submit path)
      if (!window.CDLTools || !CDLTools.submitLead) {
        console.error("[pdf-embed] CDLTools.submitLead unavailable (is cdl-tools.js loaded site-wide?)");
        restoreBtn();
        showError("Oups, un souci est survenu. Réessayez dans un instant.");
        return;
      }

      CDLTools.submitLead({
        portalId: CONFIG.portalId,
        formId: CONFIG.formId,
        contact: { firstname: firstname, lastname: lastname, email: email },
        hiddenFields: { outil_source: ARTICLE_SOURCE }
      })
      .then(function () {
        // 3. analytics: fire cta_submitted ONLY after a real HubSpot POST
        //    resolves, so the funnel never counts a submission that did not land.
        track("cta_submitted", { tool: ARTICLE_SOURCE, category: "lead", label: "pdf_fiche" });
        // 4. generate the PDF as a Blob; lead already captured if this fails.
        if (window.CDLPdf && CDLPdf.generate) {
          // Auto-extract the article's vocab; fall back to the manual CONFIG.pdf.sections if none found.
          var autoSections = extractFicheFromArticle();
          var pdfConfig;
          if (autoSections && autoSections.length) {
            // AUTO path: derive title + filename from THIS article - never the baked 500-mots values.
            var h1 = document.querySelector("h1");
            var artTitle = (h1 && h1.textContent.trim()) || "Fiche de vocabulaire";
            pdfConfig = Object.assign({}, CONFIG.pdf, {
              sections: autoSections,
              title: artTitle,
              filename: "fiche-" + ARTICLE_SOURCE.replace(/^blog-/, "") + ".pdf",
              returnBlob: true, autoSave: false
            });
            delete pdfConfig.level; // no CEFR badge - we cannot know each article's level
          } else {
            // FALLBACK: the hand-built CONFIG.pdf fiche keeps its own title/filename/level.
            pdfConfig = Object.assign({}, CONFIG.pdf, { returnBlob: true, autoSave: false });
          }
          return CDLPdf.generate(pdfConfig)
            .then(function (res) { return res || false; })
            .catch(function (err) { console.warn("[pdf-embed] PDF generation failed:", err && err.message); return false; });
        }
        return false;
      })
      .then(function (pdfResult) { showSuccess(pdfResult); }) // 5. success
      .catch(function (err) {
        console.error("[pdf-embed] lead submit failed:", err && err.message);
        restoreBtn();
        showError("Oups, un souci est survenu. Réessayez dans un instant.");
      });
    });
  }

  function initAll() {
    var blocks = document.querySelectorAll(".cdl-pdf-block");
    for (var i = 0; i < blocks.length; i++) {
      var b = blocks[i];
      if (b.__cdlInit) continue;
      // A block may opt into a specific magnet with data-cdl-source. Such a
      // block is claimed ONLY by the script whose CONFIG.articleSource matches,
      // so two DIFFERENT magnets on one page never cross-wire (each script
      // initialises only its own block, regardless of parse/run order). Blocks
      // without the attribute are wildcard - the common single-magnet case,
      // including the same magnet placed twice - and are claimed by this script.
      var src = b.getAttribute("data-cdl-source");
      if (src && src !== ARTICLE_SOURCE) continue;
      initBlock(b);
    }
  }
  initAll(); // blocks already parsed before this script
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initAll, { once: true });
})();
