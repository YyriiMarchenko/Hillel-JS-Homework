"use strict";

const errorClass = "error";

function createErrorElement(message) {
  const errorMsg = document.createElement("p");
  errorMsg.classList.add("errorText");
  errorMsg.textContent = message;
  return errorMsg;
}

function addErrorMessege(inputElement, message) {
  if (inputElement.classList.contains(errorClass)) return;
  inputElement.classList.add(errorClass);
  const error = createErrorElement(message);
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

const tasksArray = [];

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (todoForm.elements.task.value.trim() === "") {
    addErrorMessege(todoForm.elements.task, "Надрукуйте текст");
    return;
  }

  const newTask = {
    id: tasksArray.length === 0 ? 0 : tasksArray[tasksArray.length - 1].id + 1,
    name: todoForm.elements.task.value,
    isDone: false,
  };

  const updateLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  tasksArray.push(newTask);
  updateLocal("tasksArray", tasksArray);

  const taskWrapper = document.createElement("div");
  taskWrapper.classList.add("taskWrapper");
  taskWrapper.setAttribute("data-id", newTask.id);

  const text = document.createElement("p");
  text.textContent = todoForm.elements.task.value;
  text.classList.add("description");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("value", "isDone");
  const btn = document.createElement("button");
  btn.classList.add("btn-delete");
  btn.innerText = "Видалити";
  taskWrapper.append(checkbox);
  taskWrapper.append(text);
  taskWrapper.append(btn);

  taskList.append(taskWrapper);
  todoForm.elements.task.value = "";

  checkbox.addEventListener("change", function () {
    const wrapper = this.closest(".taskWrapper");
    console.log(wrapper);

    const id = wrapper.getAttribute("data-id");
    console.log(id);
    const task = tasksArray.find((taskItem) => taskItem.id == id);
    console.log(task);
    task.isDone = this.checked;
    if (this.checked) {
      wrapper.querySelector("p").classList.add("doneTask");
      return;
    }
    wrapper.querySelector("p").classList.remove("doneTask");
  });

  btn.addEventListener("click", function () {
    this.closest(".taskWrapper").remove();
  });
});

const select = document.querySelector("#select");
select.addEventListener("change", function () {
  switch (this.value) {
    case "done":
      tasksArray.forEach((item, i) => {
        const element = document.querySelector(`[data-id="${i}"]`);
        item.isDone == false
          ? element.classList.add("hidden")
          : element.classList.remove("hidden");
      });

      break;

    case "in progress":
      tasksArray.forEach((item, i) => {
        const element = document.querySelector(`[data-id="${i}"]`);
        item.isDone != false
          ? element.classList.add("hidden")
          : element.classList.remove("hidden");
      });

      break;
    case "all":
      tasksArray.forEach((item, i) => {
        const element = document.querySelector(`[data-id="${i}"]`);
        if (item.isDone != false || item.isDone == false) {
          element.classList.remove("hidden");
        }
      });
  }
});
