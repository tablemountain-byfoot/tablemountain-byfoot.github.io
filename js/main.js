// Footer year
document.querySelectorAll(".year").forEach(el => (el.textContent = new Date().getFullYear()));

// Mobile menu
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// Show a placeholder where a photo hasn't been added yet
function markEmpty(img) {
  const holder = img.closest(".portrait, .gallery-item");
  if (holder) holder.classList.add("is-empty");
}
document.querySelectorAll(".portrait img, .gallery-item img").forEach(img => {
  if (img.complete && img.naturalWidth === 0) markEmpty(img);
  img.addEventListener("error", () => markEmpty(img));
});

// Gallery lightbox
const lightbox = document.querySelector(".lightbox");
if (lightbox) {
  const lbImg = lightbox.querySelector("img");
  const lbCaption = lightbox.querySelector(".lightbox-caption");
  const items = () => [...document.querySelectorAll(".gallery-item:not(.is-empty)")];
  let current = 0;

  function show(index) {
    const list = items();
    if (!list.length) return;
    current = (index + list.length) % list.length;
    const img = list[current].querySelector("img");
    const caption = list[current].closest("figure").querySelector("figcaption");
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCaption.textContent = caption ? caption.textContent : "";
  }

  document.querySelectorAll(".gallery-item").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("is-empty")) return;
      show(items().indexOf(btn));
      lightbox.showModal();
    });
  });

  lightbox.querySelector(".lightbox-prev").addEventListener("click", () => show(current - 1));
  lightbox.querySelector(".lightbox-next").addEventListener("click", () => show(current + 1));
  lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", e => { if (e.target === lightbox) lightbox.close(); });
  document.addEventListener("keydown", e => {
    if (!lightbox.open) return;
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
}
