const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");

mobileMenu.addEventListener("click", () => {
  body.classList.toggle("opened-menu");
  mobileMenu.classList.toggle("show");
});

$(".owl-carousel").owlCarousel({
  nav: false,
  lazyLoad: true,
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 4000,
  responsive: {
    0: {
      items: 1,
      dots: true,
      dotsEach: true,
    },
    769: {
      items: 2,
      center: true,
    },
    1440: {
      items: 3,
      center: true,
    },
  },
});
