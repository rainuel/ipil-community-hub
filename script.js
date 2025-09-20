function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("open");
}

// Change header background on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
