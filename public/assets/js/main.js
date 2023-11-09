const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");

mobileMenu.addEventListener("click", () => {
  body.classList.toggle("opened-menu");
  mobileMenu.classList.toggle("show");
});
