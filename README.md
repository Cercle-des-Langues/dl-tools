# dl-tools — Cercle des Langues front-end modules

Shared, dependency-free JavaScript modules for CDL's interactive tools (games + blog lead magnets). They are hosted on **GitHub Pages** and loaded **site-wide** in Webflow, so a new tool is configuration, not new code.

## Hosted files (jsDelivr CDN)

Served straight from this public repo by jsDelivr - a global CDN with proper cache control. No GitHub Pages build required.

Base URL (pinned, recommended): `https://cdn.jsdelivr.net/gh/Cercle-des-Langues/dl-tools@v1.0.0/`
Floating (latest `main`, cached ~7 days): `https://cdn.jsdelivr.net/gh/Cercle-des-Langues/dl-tools@main/`

| File | Role |
|---|---|
| `cdl-analytics.js` | Site-wide analytics: scroll depth, CTA clicks, tool-link clicks. Pushes the flat `cdl_*` schema to `window.dataLayer`. |
| `cdl-tools.js` | Shared lead-capture module. `window.CDLTools`: `register()`, `openModal()`, `closeModal()`, `submitLead()`, `track()`, `hasSubmitted()`. One HubSpot submit, one brand-compliant modal. |
| `word-catcher-streak.js` | Observes the Word Catcher game and opens the capture modal on a 5-in-a-row streak. |
| `cdl-pdf.js` | Branded PDF lead-magnet engine. `window.CDLPdf.generate(config)` - builds an on-brand multi-page fiche client-side with jsPDF. |

## Load order (Webflow → Project Settings → Custom Code → Head)

Order matters; `defer` preserves it.

```html
<script src="https://cdn.jsdelivr.net/gh/Cercle-des-Langues/dl-tools@v1.0.0/cdl-analytics.js" defer></script>
<script src="https://cdn.jsdelivr.net/gh/Cercle-des-Langues/dl-tools@v1.0.0/cdl-tools.js" defer></script>
<script src="https://cdn.jsdelivr.net/gh/Cercle-des-Langues/dl-tools@v1.0.0/word-catcher-streak.js" defer></script>
<script src="https://cdn.jsdelivr.net/gh/Cercle-des-Langues/dl-tools@v1.0.0/cdl-pdf.js" defer></script>
```

`cdl-tools.js` must load before `word-catcher-streak.js` (the streak layer calls `CDLTools`). The others are order-independent, but the block above is the safe canonical order.

## Per-tool embeds (NOT hosted here)

Each tool's `register()` / widget / download block is pasted into the relevant Webflow page or CMS item, **without** the local `<script src="cdl-tools.js">` test line (the modules load site-wide). Reference snippets and docs live in the main project folder: `dictee_widget.html`, `memory-widget.html`, `word-catcher-embed.html`, `pdf-download-embed.html`, plus `PDF-TOOL.md` / `ANALYTICS.md` / `DEPLOY.md`.

## HubSpot

Portal `6034125`, one shared form `71b010ce-dc05-47ce-88c4-130674855dae`, differentiated by the hidden `outil_source` field. The `hubspotutk` cookie is intentionally not sent (GDPR/CNIL). No PII is ever pushed to `dataLayer`.

## Game widgets (hosted, tiny embed)

The Dictée and Memory games are packaged as self-mounting scripts (built from `dictee_widget.html` / `memory-widget.html`). Each one injects the game into a mount `<div>` and runs in the page, so it reaches the site-wide `CDLTools` for lead capture (no iframe).

In the game's Webflow CMS "Custom Code" box, paste only these two lines:

```html
<!-- Dictée -->
<div id="cdl-dictee"></div>
<script src="https://cdn.jsdelivr.net/gh/Cercle-des-Langues/dl-tools@v1.1.0/dictee.js" defer></script>
```
```html
<!-- Memory -->
<div id="cdl-memory"></div>
<script src="https://cdn.jsdelivr.net/gh/Cercle-des-Langues/dl-tools@v1.1.0/memory.js" defer></script>
```

Word Catcher stays as it is (external game on `argenty-cdl.github.io` + the small `CDLTools.register` snippet). All three depend on the site-wide Head scripts being loaded.

To rebuild a game widget after editing its source: re-run the packaging (base64 the `<style>`+markup, append the game `<script>` body into the self-mounting wrapper), then bump the tag.

## Updating a module (versioned, cache-safe)

Edit the file, then cut a new tag and bump the version in the Webflow `<script>` URLs:

```bash
git add .
git commit -m "update: <what changed>"
git tag v1.0.1
git push origin main v1.0.1
```

Then change `@v1.0.0` to `@v1.0.1` in the Webflow Head block. A tag is immutable, so the new version is live globally within ~1 minute with no stale cache.

If you use the floating `@main` URLs instead, jsDelivr caches them ~7 days; force a refresh by opening the purge URL, e.g. `https://purge.jsdelivr.net/gh/Cercle-des-Langues/dl-tools@main/cdl-tools.js`.
