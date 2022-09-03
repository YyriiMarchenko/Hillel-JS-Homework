"use strict";

const errorClass = "error";

function getErrorElement(message) {
  const errorMsg = document.createElement("p");
  errorMsg.classList.add("errorText");
  errorMsg.textContent = message;
  return errorMsg;
}

function addErrorMessege(inputElement, message) {
  inputElement.classList.add("errorClass");
  const error = getErrorElement(message);
  inputElement.closest(".fieldWrapper").append(error);
}

const todoForm = document.forms.todo;
const taskList = document.querySelector(".tasks");

todoForm.elements.task.addEventListener("input", function () {
  this.classList.remove(errorClass);
  this.closest(".fieldWrapper")
    .querySelectorAll(".errorText")
    .forEach((error) => error.remove());
});

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (todoForm.elements.task.value.trim() === "") {
    addErrorMessege(todoForm.elements.task, "Надрукуйте текст");
    return;
  }

  const taskWrapper = document.createElement("div");
  taskWrapper.classList.add("taskWrapper");

  const text = document.createElement("p");
  text.textContent = todoForm.elements.task.value;
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  const btn = document.createElement("button");
  btn.innerText = "Видалити";
  taskWrapper.append(checkbox);
  taskWrapper.append(text);
  taskWrapper.append(btn);

  taskList.append(taskWrapper);
  todoForm.elements.task.value = "";

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      this.closest(".taskWrapper").querySelector("p").classList.add("doneTask");
      return;
    }
    this.closest(".taskWrapper")
      .querySelector("p")
      .classList.remove("doneTask");
  });

  btn.addEventListener("click", function () {
    this.closest(".taskWrapper").remove();
  });
});
