"use strict";

const images = [
  "./img/1.jpg",
  "./img/2.jpg",
  "./img/3.jpg",
  "./img/4.jpg",
  "./img/5.jpg",
];

const picture = document.createElement("img");
picture.setAttribute("src", "");
document.querySelector(".slider-line").append(picture);
picture.src = images[0];

const prev = document.querySelector(".slider-prev");
const next = document.querySelector(".slider-next");
const dots = document.querySelectorAll(".dot");

let counter = 0;

const activSlide = (n) => {
  images.forEach(function () {
    picture.src = images[n];
  });
};

const activDot = (n) => {
  for (let dot of dots) {
    dot.classList.remove("active");
  }
  dots[n].classList.add("active");
};

const nextSlide = () => {
  if (counter == images.length - 1) {
    clearInterval(id);
    activSlide(counter);
    activDot(counter);
  } else {
    counter++;
    activSlide(counter);
    activDot(counter);
  }
};

const prevSlide = () => {
  if (counter == 0) {
    counter = images.length - 1;
    activSlide(counter);
    activDot(counter);
  } else {
    counter--;
    activSlide(counter);
    activDot(counter);
  }
};

let id = setInterval(nextSlide, 2000);

dots.forEach((item, indexDog) => {
  item.addEventListener("click", () => {
    counter = indexDog;
    activSlide(counter);
    activDot(counter);
  });
});
