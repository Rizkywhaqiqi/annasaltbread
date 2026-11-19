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

The owner's DOE export informs the pink/cream palette and expressive typography. DOE code, photos, proprietary fonts, offers, and testimonials are not included. The supplied official Ana wordmark and flower artwork are used. Product categories describe the supplied photos; prices and opening hours await confirmation. Ordering links to the official Instagram account.

## Interactions

React client components manage product photo dialogs and mobile navigation. The menu groups products into Manis and Gurih sections with anchor navigation. Native dialogs support Escape, focus restoration, and scroll locking. Images, navigation, and primary content remain server rendered. No admin dashboard or payment checkout is included.

## Visual design

The site uses a restrained cream and brown palette, serif headings, neutral product descriptions, and the supplied Ana logo. Promotional slogans remain removed. Expressive full-width composition, floating breads, CSS 3D tilt, scroll parallax, a brand/location ribbon and scroll reveals are restored. All floral decoration uses the supplied official Ana flower mark. A footer animation control and reduced-motion support cover continuous movement.

The three transparent PNG product cutouts are in `public/graphics`. Original photography remains in menu details. Logo masks preserve the supplied artwork.

### Asset generation notes

Bread PNGs were edited with the built-in image generation tool using the original Ana photos as edit targets. Prompts: isolate only the single foreground cream-filled bread / foreground savory bread with sauce and scallion / central chocolate-chip-covered bread, remove tray, surrounding breads and background, preserve silhouette, toppings, photographic texture and three-quarter angle, center with transparent padding, and output a transparent PNG. The edited cutouts are decorative; the original photos remain in the menu and product dialogs. The attempted generated wordmark was not used; the owner's exact supplied logo is displayed through a background-removing luminance mask.

## Menu reference

The owner-supplied imdonut.nyc menu export informs a centered introduction, category headings, generous spacing, centered product groups, and a front/hover photo transition. Ana data, branding, and photos are used throughout; competitor product names, claims, prices, assets, fonts and code are not included. The fourth product retains its original photo because no isolated cutout is available.
