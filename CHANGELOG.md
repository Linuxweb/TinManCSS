# Changelog

## 2.0.0 (2026)

A rewrite. Class names are unchanged, so existing markup keeps working, but spacing and some sizes differ and the project is no longer mobile first.

### Changed
- **Desktop first.** The grid and heading scale are the base styles, and one `max-width: 47.9375em` query stacks columns below 48em. The `layout.css` stubs are now `max-width: 60em`, `max-width: 30em` and a final `min-width: 90em`.
- **Vertical rhythm.** Columns get an even 1.4em gap between wrapped lines (`--row-gap`), matching the gap between neighbours. Block margins are on a 0.7 scale.
- **Type.** Golden ratio scale for headings, with line height set as the font size plus 0.618rem. Body `line-height` is unitless 1.618.
- **Container** is 90% wide, was 80%.
- **The `*dark` palette colours** are now properly dark, same hue, so they pass AA as text. They were almost identical to their base colours.
- **Colours** are `light-dark()` tokens in `colors.css`, with light and dark themes. The primary blue is darker in light mode so links pass WCAG AA contrast, and a separate lighter `--accent` blue is used for the info button and icons, with a dark label that also passes.
- **Fonts.** Raleway is loaded with `display=swap`, Font Awesome comes from jsDelivr, and `fonts.css` owns both.
- **Normalize.css** is v8.0.1, untouched. `tinman.css` sets `strong` and `b` to weight 700, because normalize's `bolder` shows no bold on light or already bold text.
- **Apache config.** CSS and JS cache for a week, AVIF is added, the IE document modes block is removed, and a referrer policy is set.
- Error pages use the framework button and spacing, with corrected titles and fonts.
- jQuery now loads from the jQuery CDN and is no longer bundled.

### Added
- `dist/` with a minified copy of each stylesheet.
- `u-margin-1` to `u-margin-6` for section spacing.
- Light and dark theme toggle (`js/theme-toggle.js`) and a theme aware SVG logo.
- `demo.html`, a sample landing page, and a much fuller `index.html` showcase.
- `400.html`, `401.html` and `503.html` error pages.
- SVG favicon, `theme-color`, canonical and Open Graph placeholders.
- A `prefers-reduced-motion` rule for the heartbeat animation.
- `pinkdark` text and background colours, and a hover colour for every text colour class.
- A Colours section in `index.html` showing the theme tokens and the full palette.
- Skeleton credited in `LICENSE`, the file headers and the README.
- This changelog.

### Removed
- The bundled Socicon icon font and its classes (social icons use Font Awesome).
- `crossdomain.xml`, the `back-office/` and `includes/` folders, and `images/logo.png`.
- Internet Explorer support.

## 1.0.0 (2017)

First release, a Skeleton derivative.
