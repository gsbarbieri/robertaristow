function initHeroCarousel() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const slides = [...hero.querySelectorAll(".hero-slide")];
  let index = slides.findIndex((s) => s.classList.contains("active"));
  if (index < 0) index = 0;

  function show(next) {
    slides[index].classList.remove("active");
    index = (next + slides.length) % slides.length;
    slides[index].classList.add("active");
  }

  hero.querySelector(".hero-nav.prev")?.addEventListener("click", () => show(index - 1));
  hero.querySelector(".hero-nav.next")?.addEventListener("click", () => show(index + 1));

  setInterval(() => show(index + 1), 6000);
}

document.addEventListener("DOMContentLoaded", initHeroCarousel);
