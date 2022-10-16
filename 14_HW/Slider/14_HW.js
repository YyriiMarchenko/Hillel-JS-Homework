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

const dots = document.querySelectorAll(".dot");

let counter = 0;

const activSlide = (n) => {
  picture.src = images[n];
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
  } else {
    counter++;
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
