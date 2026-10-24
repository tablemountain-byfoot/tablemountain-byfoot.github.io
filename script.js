// Small enhancement: add a subtle shadow to the header after scrolling.
const header = document.querySelector(".site-header");
if (header) {
  const updateHeader = () => {
    header.style.boxShadow = window.scrollY > 12
      ? "0 8px 25px rgba(20, 30, 25, .06)"
      : "none";
  };
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
}
