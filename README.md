# Table Mountain by foot

Website for Johan Jansen van Vuuren, mountain guide on Table Mountain, Cape Town.

## Files
- `index.html`: main page (hero, about, activities, routes, safety, testimonials, contact)
- `gallery.html`: photo gallery with a full-screen viewer
- `css/style.css`: colours, fonts, layout
- `js/main.js`: menu, photo placeholders, gallery viewer
- `images/`: `johan.jpg` (portrait) and `gallery/` (trip photos)

## Things to fill in
Search the files for these:
- `27XXXXXXXXX`: Johan's WhatsApp number (country code 27, no + or leading 0)
- `hello@example.com`: his email
- `[` square brackets: qualifications and client quotes (in `index.html`)
- `Table Mountain by foot`: the business name, if it changes

## Adding photos
1. Resize to about 1600px wide (JPG, under ~400 KB each).
2. Portrait: save as `images/johan.jpg`.
3. Gallery: save in `images/gallery/`, then copy a `<li>` block in `gallery.html` and update `src`, `alt` and the caption.
Until a photo exists, a placeholder is shown instead.
Ask clients for permission before posting photos where they can be recognised.

## Changing text
All text is in `index.html` and `gallery.html`; edit it directly.

## Publishing on GitHub Pages
1. Create a repo in the organization named `<org-name>.github.io`.
2. Upload all files (keep the folder structure).
3. Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
4. The site appears at `https://<org-name>.github.io` after a minute or two.

## Custom domain (later)
Settings → Pages → Custom domain → enter his domain.
At the domain registrar, add the DNS records GitHub shows, then tick "Enforce HTTPS".
