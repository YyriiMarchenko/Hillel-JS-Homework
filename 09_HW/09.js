"use strict";

const images = [
  "./img/1.jpg",
  "./img/2.jpg",
  "./img/3.jpg",
  "./img/4.jpg",
  "./img/5.jpg",
  "./img/6.jpg",
  "./img/7.jpg",
  "./img/8.jpg",
  "./img/9.jpg",
  "./img/10.jpg",
];

let page = 0;

document.querySelector(".buttons").addEventListener("click", (event) => {
  if (event.target.className === "slider-next") {
    document.querySelector(".slider-line").innerHTML = `<img src="${
      images[page++]
    }"/>`;
    if (page >= images.length) {
      page = 0;
    }
  }
  if (event.target.className === "slider-prev") {
    document.querySelector(".slider-line").innerHTML = `<img src="${
      images[--page]
    }"/>`;
    if (page <= 0) {
      page = images.length;
    }
  }
});
