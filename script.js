// Smooth fade-in on page load
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

// Smooth scrolling for internal links (future-proof)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});
