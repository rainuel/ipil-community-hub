function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("open");
}

// Close menu when a link is clicked (mobile)
const navLinks = document.querySelectorAll("#navMenu a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("navMenu");
    if (window.innerWidth <= 768) {
      nav.classList.remove("open");
    }
  });
});

// Change header background on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
