# Ana Salt Bread — P0–P3 regression checklist

This checklist protects the existing brand identity; do not replace the official Ana wordmark, flower, typography, colors, tagline, or best-seller copy.

## P0: functionality
- [ ] Editorial video occupies the left grid cell on desktop and precedes copy on mobile.
- [ ] Product modal opens, closes via Escape/backdrop/close button, and restores focus.
- [ ] Header navigation dialog opens and closes via Escape, button, and route change; background scroll restores.
- [ ] Links for menu, locations, and ordering work.

## P1: responsive and navigation
- [ ] Check widths 320, 360, 375, 430, 720, 768, 900, 1024, 1280, 1440 and 1920px.
- [ ] No horizontal overflow, clipped buttons, overlapping hero/header text or hidden navigation actions.
- [ ] Keyboard-only navigation reaches all visible interactive elements in a sensible order.
- [ ] Header colors remain legible after scroll, resize, and route navigation.

## P2: animation and performance
- [ ] Ribbon loops without a visible seam and without horizontal page overflow.
- [ ] Motion toggle pauses CSS and GSAP animation; system reduced-motion is respected.
- [ ] Video has a poster fallback; verify mobile loading and data usage.
- [ ] Measure LCP, CLS, INP on actual deployed preview; no scores claimed without measurements.

## P3: quality gates
- [ ] `npm ci` and `npm run build` pass on Node >=22.
- [ ] Browser console has no errors during navigation, modal, resize, or motion toggle.
- [ ] Accessibility checks: heading hierarchy, alt text, dialog labels, visible focus, contrast.
- [ ] Compare screenshots to approved desktop/mobile brand reference before merging.

**Status:** Checklist created, not executed in this environment. Keep PR as draft until verified.
