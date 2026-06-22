# dl-tools — Cercle des Langues front-end modules

Shared, dependency-free JavaScript modules for CDL's interactive tools (games + blog lead magnets). They are hosted on **GitHub Pages** and loaded **site-wide** in Webflow, so a new tool is configuration, not new code.

## Hosted files (GitHub Pages)

Base URL: `https://cercle-des-langues.github.io/dl-tools/`

| File | Role |
|---|---|
| `cdl-analytics.js` | Site-wide analytics: scroll depth, CTA clicks, tool-link clicks. Pushes the flat `cdl_*` schema to `window.dataLayer`. |
| `cdl-tools.js` | Shared lead-capture module. `window.CDLTools`: `register()`, `openModal()`, `closeModal()`, `submitLead()`, `track()`, `hasSubmitted()`. One HubSpot submit, one brand-compliant modal. |
| `word-catcher-streak.js` | Observes the Word Catcher game and opens the capture modal on a 5-in-a-row streak. |
| `cdl-pdf.js` | Branded PDF lead-magnet engine. `window.CDLPdf.generate(config)` - builds an on-brand multi-page fiche client-side with jsPDF. |

## Load order (Webflow → Project Settings → Custom Code → Head)

Order matters; `defer` preserves it.

```html
<script src="https://cercle-des-langues.github.io/dl-tools/cdl-analytics.js" defer></script>
<script src="https://cercle-des-langues.github.io/dl-tools/cdl-tools.js" defer></script>
<script src="https://cercle-des-langues.github.io/dl-tools/word-catcher-streak.js" defer></script>
<script src="https://cercle-des-langues.github.io/dl-tools/cdl-pdf.js" defer></script>
```

`cdl-tools.js` must load before `word-catcher-streak.js` (the streak layer calls `CDLTools`). The others are order-independent, but the block above is the safe canonical order.

## Per-tool embeds (NOT hosted here)

Each tool's `register()` / widget / download block is pasted into the relevant Webflow page or CMS item, **without** the local `<script src="cdl-tools.js">` test line (the modules load site-wide). Reference snippets and docs live in the main project folder: `dictee_widget.html`, `memory-widget.html`, `word-catcher-embed.html`, `pdf-download-embed.html`, plus `PDF-TOOL.md` / `ANALYTICS.md` / `DEPLOY.md`.

## HubSpot

Portal `6034125`, one shared form `71b010ce-dc05-47ce-88c4-130674855dae`, differentiated by the hidden `outil_source` field. The `hubspotutk` cookie is intentionally not sent (GDPR/CNIL). No PII is ever pushed to `dataLayer`.

## Updating a module

Edit the file, then:

```bash
git add .
git commit -m "update: <what changed>"
git push origin main
```

GitHub Pages redeploys in ~1-2 minutes. GitHub Pages caches, so a hard refresh (or a cache-busting `?v=2` query on the script URL) helps confirm a new version is live.
