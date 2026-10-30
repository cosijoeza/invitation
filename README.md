# Wedding Invitation

A static wedding invitation recreated from the design at https://wedding.nicdark.com/wedding-day/.

## Project Structure

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
├── IMPLEMENTATION_GUIDE.md
└── prompt.md
```

## Setup

This project uses only HTML, CSS, and JavaScript. No installation is required.

Open `index.html` directly in a browser, or serve the folder locally:

```text
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Development

- Add page markup to `index.html`.
- Add reusable and responsive styles to `css/styles.css`.
- Add interactive behavior to `js/main.js`.
- Store media files in `assets/`.

See `IMPLEMENTATION_GUIDE.md` for maintenance details.

## Reference parity

The page reproduces the reference structure and copy from the Nicdark Wedding Day demo. Media is loaded from the reference site's public asset URLs and should be replaced by licensed local assets before production use.
