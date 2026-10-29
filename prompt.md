# Wedding Invitation Web Page

## Objective

Create a responsive, web-based wedding invitation using only HTML, CSS, and JavaScript.

Recreate the visual design and behavior of the website at:

https://wedding.nicdark.com/wedding-day/

Use the reference URL strictly as the source of truth for the invitation's design, layout, imagery, copy, colors, and interactions.

## Technology Constraints

- Use only HTML, CSS, and JavaScript.
- Do not use frontend frameworks or libraries.
- Do not use build tools or package managers.
- Keep the project compatible with modern desktop and mobile browsers.
- Do not introduce stock content, fake names, events, dates, or details that do not appear in the reference or are not provided by the user.

## Deliverables

Create the project using a clear and maintainable structure, for example:

```text
/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── README.md
├── README.md
└── IMPLEMENTATION_GUIDE.md
```

You may adjust the structure if it improves maintainability, but document any decisions in the README.

Create:

1. `README.md` with setup instructions, project structure, customization points, and browser testing guidance.
2. `IMPLEMENTATION_GUIDE.md` for future maintainers, describing the layout, reusable components, styles, JavaScript behavior, assets, and update procedure.

## Visual and Functional Requirements

- Reproduce the reference's overall structure and section order as closely as possible.
- Match its typography, spacing, colors, borders, shadows, and responsive breakpoints.
- Make the invitation fully responsive on mobile, tablet, and desktop.
- Recreate visible animations and interactions, including the parallax effect, countdown timer, and image carousel when present in the reference.
- Ensure navigation links, buttons, forms, and media behave correctly.
- Preserve accessibility:
  - use semantic HTML;
  - provide meaningful alternative text;
  - support keyboard navigation;
  - maintain visible focus styles;
  - respect the user's reduced-motion preference.
- Avoid placeholder content unless an asset or real value is unavailable; clearly mark any temporary placeholder.

## Implementation Process

Before writing the page:

1. Inspect the reference website and identify its sections, typography, imagery, colors, and interactions.
2. Inventory the assets needed and check which may be reproduced locally.
3. Produce semantic HTML first.
4. Add responsive styles and recreate animations.
5. Add JavaScript only for behavior that cannot be expressed with HTML or CSS.

After implementation:

1. Verify desktop and mobile layouts.
2. Test navigation and all interactive controls.
3. Check console errors, broken links, and missing assets.
4. Confirm that the project works by opening it directly in a browser or through a simple local server.

## Quality Expectations

- Keep HTML, CSS, and JavaScript separated and well organized.
- Use descriptive class and file names.
- Avoid duplicated styles and repeated JavaScript logic.
- Add concise comments only where the code is not self-explanatory.
- Do not copy copyrighted third-party source files without permission.
- Do not claim exact asset or content parity unless that parity has been verified.
- Make it responsive for mobile devices.
