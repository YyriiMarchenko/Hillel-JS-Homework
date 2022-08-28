"use strict";
// Завдання 8.1
function onButtonClick() {
  const bgBlueClass = "color-text";
  const list = document.querySelector(".text");
  list.classList.toggle(bgBlueClass);
}

// Завдання 8.2

document.getElementById("add").onclick = () => {
  const add = prompt("Provide link");
  document.getElementById("redirect").onclick = () => {
    document.location.href = add;
  };
};

// Завдання 8.3

document.getElementById("random").onclick = () => {
  document.getElementById("img").setAttribute("src", gatRendomImg());
};
// Завдання 8.3
function gatRendomImg() {
  const arrImg = [
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg",
    "./img/4.jpg",
    "./img/5.jpg",
  ];
  const index = Math.floor(Math.random() * arrImg.length);
  return arrImg[index];
}
