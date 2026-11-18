# Ana Salt Bread

Independent brand profile built with Next.js 16 App Router and React 19. Separate routes: `/`, `/tentang`, `/menu`, `/kunjungi`, `/kontak`. Includes a custom 404, sitemap, robots, page metadata, Next Image optimization, and Next Link navigation.

## Develop

Requires Node.js 22+.

```sh
npm ci
npm run dev
npm run build
npm start
```

Vercel detects the Next.js framework; use its default output settings.

## Content and assets

Brand and product data lives in `lib/content.js`. Page content lives in `app/**/page.jsx`, shared UI in `components`, and styles in `app/globals.css`.

The owner approved publication of Ana photography from Drive in this public repository and on Vercel. The optimized WebP files and source notes are in `public/images`. Anton is self-hosted under `public/fonts` with its open-source license.

The owner's DOE export informs the pink/cream palette and expressive typography. DOE code, photos, proprietary fonts, offers, and testimonials are not included. The Ana wordmark is a provisional typographic treatment. Product categories describe the supplied photos; prices and opening hours await confirmation. Ordering links to the official Instagram account.

## Interactions

React client components manage sweet/savory filters, product photo dialogs, and mobile navigation. Native dialogs support Escape, focus restoration, and scroll locking. Images, navigation, and primary content remain server rendered. No admin dashboard or payment checkout is included.
