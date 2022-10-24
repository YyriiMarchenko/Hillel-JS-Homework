"use strict";

const categorySelect = document.getElementById("categorySelect");

const tradeBox = document.getElementById("tradebox");
const trade = document.getElementById("trade ");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
    json.forEach((item) => {
      const categoryWrapper = document.createElement("div");
      categoryWrapper.setAttribute("data-id", item.id);

      const img = document.createElement("img");
      img.setAttribute("src", item.image);
      img.classList.add("img");
      categoryWrapper.append(img);

      const price = document.createElement("h1");
      price.textContent = `${item.price} $`;
      categoryWrapper.append(price);

      const category = document.createElement("h2");
      category.textContent = `${item.category}`;
      categoryWrapper.append(category);

      const trade = document.createElement("p");
      trade.textContent = `${item.description}`;
      categoryWrapper.append(trade);

      tradeBox.append(categoryWrapper);
    });
  })
  .catch((error) => alert("Any error", error.message));

fetch("https://fakestoreapi.com/products/categories")
  .then((res) => res.json())
  .then((json) => {
    json.forEach((categoryItem, i, arr) => {
      const option = document.createElement("option");
      option.setAttribute("value", arr[i]);
      option.textContent = `${categoryItem}`;
      categorySelect.append(option);
    });
  })
  .catch((error) => alert("Any error", error.message));

const changeCategory = () => {
  switch (categorySelect.value) {
    case "men's clothing":
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          json.forEach((item, i) => {
            const element = document.querySelector(`[data-id="${i + 1}"]`);
            console.log(element);
            if (item.category == "men's clothing") {
              element.classList.remove("hidden");
              return;
            }
            element.classList.add("hidden");
          });
        })
        .catch((error) => alert("Any error", error.message));
      break;

    case "women's clothing":
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          json.forEach((item, i) => {
            const element = document.querySelector(`[data-id="${i + 1}"]`);
            console.log(element);
            if (item.category == "women's clothing") {
              element.classList.remove("hidden");
              return;
            }
            element.classList.add("hidden");
          });
        })
        .catch((error) => alert("Any error", error.message));
      break;

    case "electronics":
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          json.forEach((item, i) => {
            const element = document.querySelector(`[data-id="${i + 1}"]`);
            console.log(element);
            if (item.category == "electronics") {
              element.classList.remove("hidden");
              return;
            }
            element.classList.add("hidden");
          });
        })
        .catch((error) => alert("Any error", error.message));
      break;
    case "jewelery":
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          json.forEach((item, i) => {
            const element = document.querySelector(`[data-id="${i + 1}"]`);

            if (item.category == "jewelery") {
              element.classList.remove("hidden");
              console.log(element);
              return;
            }
            element.classList.add("hidden");
          });
        })
        .catch((error) => alert("Any error", error.message));
  }
};

categorySelect.addEventListener("change", changeCategory);
