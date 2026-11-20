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

The owner's DOE export informs the pink/cream palette and expressive typography. DOE code, photos, proprietary fonts, offers, and testimonials are not included. The supplied official Ana wordmark and flower artwork are used. Product categories describe the supplied photos; prices and opening hours await confirmation. Ordering links to the owner-supplied ESB Order page at https://esborder.qs.esb.co.id/ANA; Instagram remains the contact channel.

## Interactions

React client components manage product photo dialogs and shared navigation. The navbar uses a GSAP hover/focus indicator, a floating scroll state with reading progress, and an animated full-screen navigation panel on desktop and mobile. Its surface follows the background of the section beneath it, resolving transparent sections through their ancestors. Logo, text, marker, and controls adapt to dark surfaces; the footer palette is adopted at scroll end. Palette reads are cached per route/resize, scroll updates are frame-limited, and layout changes are observed. The menu groups products into Manis and Gurih sections with anchor navigation. Native dialogs support Escape, focus restoration, and scroll locking. Images, navigation, and primary content remain server rendered. No admin dashboard or payment checkout is included.

## Visual design

The site uses a restrained cream and brown palette, serif headings, neutral product descriptions, and the supplied Ana logo. Promotional slogans remain removed. Expressive full-width composition, floating breads, CSS 3D tilt, scroll parallax, a brand/location ribbon and scroll reveals are restored. All floral decoration uses the supplied official Ana flower mark. A footer animation control and reduced-motion support cover continuous movement.

The three transparent PNG product cutouts are in `public/graphics`. Original photography remains in menu details. Logo masks preserve the supplied artwork.

### Asset generation notes

Bread PNGs were edited with the built-in image generation tool using the original Ana photos as edit targets. Prompts: isolate only the single foreground cream-filled bread / foreground savory bread with sauce and scallion / central chocolate-chip-covered bread, remove tray, surrounding breads and background, preserve silhouette, toppings, photographic texture and three-quarter angle, center with transparent padding, and output a transparent PNG. The edited cutouts are decorative; the original photos remain in the menu and product dialogs. The attempted generated wordmark was not used; the owner's exact supplied logo is displayed through a background-removing luminance mask.

## Menu reference

The owner-supplied imdonut.nyc menu export informs a centered introduction, category headings, generous spacing, centered product groups, and a front/hover photo transition. Ana data, branding, and photos are used throughout; competitor product names, claims, prices, assets, fonts and code are not included. The fourth product retains its original photo because no isolated cutout is available.

## Motion and runtime audit

GSAP ScrollTrigger now manages route-scoped reveals, image parallax, and hover feedback with context cleanup. Reveal state avoids replay flashes when the animation preference changes. Browser storage access is guarded. The shared footer control respects reduced-motion preferences.

Three.js is dynamically loaded for a decorative procedural flower, with a capped pixel ratio, visibility-controlled rendering, resize handling, resource disposal, and an official-logo fallback for missing WebGL or reduced motion. The 3D ornament is a floral interpretation; official logo artwork remains unchanged. Product cutouts remain photographic CSS layers.

Validation: Next.js production build; browser navigation through all five pages; no horizontal overflow at the desktop test viewport; animation pause/resume. The cloud browser has WebGL disabled, so the fallback was exercised and actual WebGL rendering remains unverified on hardware-enabled browsers.

## Food catalogue typography

Menu headings and product names use the self-hosted Anton display face with berry accents. Descriptive product labels explicitly include Salt Bread; short filling/topping descriptions and Instagram ordering calls to action make the food offering clear. Category grouping, motion, product cutouts and original-photo dialogs are retained. Labels describe supplied photography and do not claim to be official flavour names.

## Direction-aware navbar

A flat, full-width header centers the official Ana wordmark and Salt Bread subtitle between two groups of text links. Scrolling down reduces its height and replaces the full wordmark with the official flower icon; the desktop links stay visible. Scrolling up restores the larger brand. No floating capsule, card border, shadow, progress line, or desktop menu button is used. Mobile retains a menu button. Direction thresholds avoid jitter, a stable sticky shell avoids document reflow, and section-aware colours and reduced-motion support are retained.

## Ordering

`BRAND.orderUrl` centrally defines the ESB Order destination. Home, menu, product dialogs, contact ordering card, location FAQ, footer and navigation overlay use it. Instagram links remain for social contact and questions.

## Home editorial and gallery

The homepage includes a full-width product photo feature, ESB ordering section and a six-photo curated gallery. `components/instagram-gallery.jsx` uses owner-supplied local photography and links to the Ana Instagram profile. It does not fetch a live Instagram feed or imply that individual post URLs are known. Automatic feed synchronization requires a separately configured authorized Meta Instagram integration; no credentials are included.

## Reversible bread motion and outlet refresh

Bread images have independent GSAP transform layers with a section-scoped ScrollTrigger timeline: enter from outside the viewport, hold, then exit as the section leaves. Scrolling back reverses the timeline. Context cleanup and animation pause/reduced-motion fallback restore readable static content. Section clipping prevents horizontal overflow. The home outlet uses an upright product photo (not represented as an outlet photo), clear address and direct maps/detail actions.

## Desktop motion preference and layout refresh

The animation control resolves the visitor preference before starting GSAP. An explicit enabled/disabled choice takes precedence over the OS reduced-motion default; CSS, hero parallax and navbar transitions use the same choice. ScrollTrigger refreshes after fonts settle and main layout dimensions change. Bread entrance/exit phases are longer so their movement is visible on wide screens.

## Brand copy

Use the owner-supplied brand lines sparingly: “We Start Blooming!”, “Now serving warmth.”, and “Let your heart bloom.” Other copy stays factual and short. Product descriptions list fillings/toppings; ordering uses ESB Order. Avoid added promotional phrases such as “teman ngemilmu” or “sudah pilih rasanya”. Visual decoration and motion remain intact.

## Salt bread marquee

The home ribbon displays all twelve Ana breads from the owner-supplied tray photo, extracted onto a transparent 3-column, 4-row sprite sheet in two equal repeating image groups, with no running text. CSS translation loops seamlessly; minimum group width covers wide displays. Reduced-motion and the existing animation control pause it. Images are decorative. One optimized WebP sprite (derived from a transparent PNG background extraction) is reused for all twelve items; CSS positions isolate each cell without extra image requests.

## Desktop audit fixes

Hero bread siblings now use flat stacking contexts while the whole stage retains pointer tilt and parallax. Desktop type/stage dimensions include a short-screen layout to keep both actions visible. The marquee keeps its animation identity and uses a paused play state, retaining its phase across toggle changes. BloomScene lazily initializes when the shared motion preference first allows it and follows explicit visitor choices thereafter. Product scroll motion uses each card as its trigger.

The desktop menu shows twelve individually named breads mapped to the owner-supplied tray cutouts. Names and categories were checked against the official Ana menu linked by https://linktr.ee/anasaltbread (Google Drive file 14AFhJdgPZ5xhNXa-zxdPtI7iNHnMXMeZ). Prices remain on ESB Order. The location sections use an embedded business map rather than a product photo standing in for an outlet photo. Gading Serpong opening hours (daily 10:00–22:00 WIB) were checked against the Google business listing reached via the brand's own outlet link https://share.google/K1uKbClfJeJDk0KQH on 19 November 2026; the site links to that source and notes holiday variations. No storefront photo was available among owner assets.

## Owner-supplied full menu

The menu now contains 14 breads and 12 drinks with IDR prices transcribed from the owner's two supplied menu sheets. Sikaya Butter and Corn Supreme extend the existing bread sprites without changing the original twelve indices; the marquee repeats all fourteen. Coffee Series, Drink Series and Hot Drink Series use accessible text price lists beside the original drinks sheet. Product dialogs and home cards share the same price source. Uploaded sheets are available locally as optimized WebP images. ESB Order remains the destination for current availability and checkout; the price note explains that final prices may change.
