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

const picture = document.createElement("img");
picture.setAttribute("src", "");
document.querySelector(".slider-line").append(picture);

let counter = 1;
picture.src = images[0];

document.querySelectorAll(".buttons").forEach(function (element) {
  element.addEventListener("click", (event) => {
    if (event.target.className === "slider-next") {
      picture.src = images[counter];
      counter++;
      if (counter == images.length) {
        counter = 0;
      }
    }
    if (event.target.className === "slider-prev") {
      picture.src = images[counter - 1];
      --counter;
      if (counter == 0) {
        counter = images.length;
      }
    }
  });
});
