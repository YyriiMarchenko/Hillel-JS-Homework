"use strict";

const formTitle = document.forms["title"];
const block = document.getElementById("wraper");

formTitle.addEventListener("submit", function (event) {
  event.preventDefault();

  async function renderTitle() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();

      data.forEach((item, i) => {
        const text = document.createElement("p");
        text.setAttribute("data-id", item.id);
        text.classList.add("hidden");
        text.textContent = `${item.title} `;
        block.append(text);
        const element = document.querySelector(`[data-id="${i}"]`);
        if (item.id == formTitle.elements.id.value) {
          element.classList.remove("hidden");
          return;
        }
      });
    } catch {
      alert("error");
    }
  }

  renderTitle();
});
