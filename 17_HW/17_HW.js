"use strict";

new Swiper(".image-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,

  autoplay: {
    dalay: 5000,
    disableOnInteraction: false,
  },
});
