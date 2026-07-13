document.getElementById("year").textContent = new Date().getFullYear();

const gallery = document.getElementById("gallery");
const emptyMessage = document.getElementById("empty-message");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.hidden = false;
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImg.src = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

if (!PHOTOS || PHOTOS.length === 0) {
  emptyMessage.hidden = false;
} else {
  for (const filename of PHOTOS) {
    const src = `images/${filename}`;
    const img = document.createElement("img");
    img.src = src;
    img.alt = filename;
    img.loading = "lazy";
    img.addEventListener("click", () => openLightbox(src, filename));
    gallery.appendChild(img);
  }
}
