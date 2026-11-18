# Ana Salt Bread

Independent, responsive brand profile with separate Home, About, Menu, Visit, and Contact pages. Built with semantic HTML, CSS, and vanilla JavaScript, using a dependency-free Node.js build.

## Publication status

The seven Ana product WebP photos are prepared and tested locally but excluded from this public repository pending explicit permission to publish the Drive assets. Copy the approved files listed in `public/images/SOURCES.md` into `public/images/` before building. Production deployment is pending that approval. The open-source Anton font is included with its license.

## Develop

```sh
npm run build
npm run dev
```

Requires Node.js 22+. Preview runs on port 4173 (or `PORT`). Build output is `dist`. On Vercel use `npm run build`, output directory `dist`, and the included clean URL configuration.

## Content

Edit `src/content.mjs` for brand details, address, Instagram, and menu photo descriptions. Edit `src/pages.mjs` for page templates. CSS is in `src/styles.css`. Run the build after edits. Each page contains its own title, description, canonical URL, and semantic HTML. Build checks H1 count, internal links, and referenced assets.

The visual direction adapts the owner's supplied DOE Donuts export: expressive typography, pink/cream color fields, and product-led compositions. DOE source code, proprietary fonts, photos, testimonials, offers, and copy are not republished. The uploaded export is not included in this repository.

Official Ana photography comes from the owner's Drive folder; see `public/images/SOURCES.md`. Photos are optimized to WebP. The wordmark and favicon are a typographic treatment pending a standalone approved logo asset. Product labels are descriptive photo categories, not a verified price list. No unverified prices, opening hours, inventory, or reviews are shown. Ordering is through the brand's Instagram account. No payment checkout, newsletter backend, or admin dashboard is included.

## Interaction

Menu filters work by sweet/savory category. Product photos open in a keyboard-accessible native dialog. The mobile navigation also uses a native dialog with Escape support, focus management, and scroll locking. Motion respects reduced-motion preferences. Every page remains readable without JavaScript.
