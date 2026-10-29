# Implementation Guide

## Overview

The site is a static HTML, CSS, and JavaScript project. It should not require a framework, package manager, or build process.

## Files

- `index.html`: semantic page structure, metadata, and resource links.
- `css/styles.css`: global variables, layout, components, responsive rules, and animations.
- `js/main.js`: countdown, carousel, navigation, and other interactive behavior.
- `assets/`: images, fonts, audio, video, and their documentation.
- `README.md`: setup and project overview.

## Adding Sections

1. Add the section to the existing semantic structure in `index.html`.
2. Keep section-specific classes together under descriptive names in `styles.css`.
3. Use JavaScript only for behavior unavailable through HTML or CSS.
4. Update the asset inventory when adding local media.

## Responsive Development

Add mobile-first base styles, then introduce `min-width` breakpoints for larger layouts. Test the page at common mobile, tablet, and desktop widths.

## Accessibility

Use semantic elements, labels, alternative text, keyboard-operable controls, visible focus states, and reduced-motion fallbacks.

## Verification

Before delivery:

- test every interactive control;
- verify desktop and mobile layouts;
- check browser console errors and broken assets;
- test keyboard navigation;
- verify that layouts continue to work with the reduced-motion setting.
