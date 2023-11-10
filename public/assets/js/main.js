const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");

mobileMenu.addEventListener("click", () => {
  body.classList.toggle("opened-menu");
  mobileMenu.classList.toggle("show");
});

$(".owl-carousel").owlCarousel({
  center: true,
  nav: false,
  lazyLoad: true,
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
      dots: true,
      dotsEach: true,
    },
    769: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
});
