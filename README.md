# AYS TILE — static website

A responsive, single-page tile installation website. No build step, paid dependency, tracking library, or server is required.

## Preview locally

Open `index.html` in a browser. For the closest match to hosting behavior, serve this folder with any simple local static server.

## Before publishing

1. Replace `assets/hero-bathroom.svg`, `assets/precision-detail.svg`, and `assets/project-*.svg` with AYS TILE project photographs. Keep the filenames or update the references. Remove each “SAMPLE VISUAL” badge after replacing the gallery sample art.
2. Add the real business phone, email, and confirmed service area in `config.js`. Set `phoneLink` to the dialable phone number to enable click-to-call. The contact form opens the visitor’s email app (`mailto:`); a static site has no form backend. For direct submissions, connect a form service or backend later.
3. Replace `[YOUR SERVICE AREA]`, `[Business email]`, and related sample contact text in `index.html`. Add the real logo if available; the current wordmark is text.
4. Review all copy and project details with the business owner. No claims about years, reviews, credentials, or service coverage are included.

## Publish for free

### GitHub Pages

Upload the contents of this folder to a GitHub repository (or a repository’s `docs` folder), then enable Pages in repository settings and select the matching branch/folder. Publish `index.html` at the selected site root.

### Cloudflare Pages

Create a Pages project from the repository, choose the static/“None” framework option, leave the build command blank, and set the output directory to `/` if this folder is the repository root. No build is needed.

The site uses local SVG artwork and remains functional if optional Google Fonts cannot load; it falls back to system fonts.
