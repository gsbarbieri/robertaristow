# Roberta Ristow Photos

A simple static photo gallery site.

## Adding your photos

1. Copy your image files (jpg/png/etc.) into the `images/` folder.
2. Open `images.js` and list each filename in the `PHOTOS` array, e.g.:

   ```js
   const PHOTOS = ["sunset.jpg", "portrait-01.jpg", "travel-03.jpg"];
   ```

3. Open `index.html` in a browser to preview locally, or refresh the page
   if it's already open.

### Getting photos from Instagram

Instagram doesn't offer a simple way to bulk-download your own posts via
script. Use the official export instead:

Instagram app/site → Settings → **Accounts Center** → **Your information and
permissions** → **Download your information** → request a copy of your
photos. Once downloaded, copy the images you want into `images/`.

## Publishing

This site is plain HTML/CSS/JS — no build step. It's deployed via GitHub
Pages from this repo.

## Local preview

Just open `index.html` directly in a browser, or run a tiny local server:

```
python3 -m http.server 8000
```

then visit http://localhost:8000
