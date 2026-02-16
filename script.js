// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Dark mode
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Resume analytics (ready for GA)
function trackResume() {
  console.log("Resume clicked");
  if (window.gtag) {
    gtag("event", "resume_click", {
      event_category: "engagement",
      event_label: "resume"
    });
  }
}

// Modal
function openModal() {
  document.getElementById("resumeModal").style.display = "block";
}
function closeModal() {
  document.getElementById("resumeModal").style.display = "none";
}
