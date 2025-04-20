const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show"); // This toggles the visibility of the nav
  hamburger.classList.toggle("active"); // This toggles the "X" animation on the hamburger
});
