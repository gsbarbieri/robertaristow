# Roberta Ristow

Personal site for Roberta Ristow — art consultant, curator, and art writer.
Design inspired by [artfirst.co.uk](https://artfirst.co.uk/).

## Pages

- `index.html` — Home, hero image carousel
- `exhibitions.html` — Exhibitions (placeholder, content pending)
- `publications.html` — Selected press and writing, linking to original articles
- `about.html` — Bio and portrait
- `contact.html` — Email, phone, Instagram

## Languages

The site supports English, Spanish, and French via a client-side switcher
(top right of the header). Translations live in `js/i18n.js` as a single
dictionary keyed by `data-i18n` attributes on the HTML elements. The chosen
language is remembered in `localStorage` across page visits.

## Structure

```
css/style.css     — all styling
js/i18n.js        — translations + language switcher
js/carousel.js    — home page hero carousel
images/           — hero photos (header-1/2/3.jpg) and about.jpg
```

## Local preview

```
python3 -m http.server 8000
```

then visit http://localhost:8000
