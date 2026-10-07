# AYS TILE — static website

A mobile-first, single-page website for AYS TILE. It needs no build step, paid dependency, or server when hosted.

## Preview locally

Open `index.html` in a browser. A local static server gives the closest preview of the hosted version.

## Current site content

- The hero, What We Do, and Built with Precision sections use the supplied AYS TILE photos.
- The project reel includes bathroom, shower, kitchen, pathway, outdoor steps, and custom floor photos.
- `config.js` contains the supplied phone number, email, and Greater Seattle Area service area.
- The estimate form opens a prefilled Gmail compose page on desktop and a prefilled draft through the phone email app on mobile. Visitors press Send; automatic submissions require a separate form service or backend.

Replace photos in `assets/` when you have updated project images. Keep the existing filenames or update the matching image paths in `index.html`.

## Publish with GitHub Pages

1. Extract `AYS-TILE-GitHub-Update.zip`.
2. Upload the **contents inside the extracted folder** to the repository’s top level. `index.html` should be visible alongside `styles.css`, `script.js`, `config.js`, and the `assets` folder. Do not put these files inside another `ays-tile-site` folder when Pages is set to publish the repository root.
3. In the repository’s **Settings → Pages**, select the `main` branch and `/ (root)` as the publishing source.
4. After GitHub finishes publishing, open the Pages address shown on that settings page.

Keep the `assets` folder and its contents together with the site files. This package contains no build step.

## Cloudflare Pages

Connect the repository, select the static/“None” framework option, leave the build command blank, and use `/` as the output directory when the site files are at the repository root.