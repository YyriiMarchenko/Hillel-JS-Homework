"use strict";

const errorClass = "error";

const TASK_ARRAY = "tasksArray";

function getErrorElement(message) {
  const errorMsg = document.createElement("p");
  errorMsg.classList.add("errorText");
  errorMsg.textContent = message;
  return errorMsg;
}

function addErrorMessege(inputElement, message) {
  if (inputElement.classList.contains(errorClass)) return;
  inputElement.classList.add(errorClass);
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

const tasksArray = getLS(TASK_ARRAY, []);

function updateLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getLS(key, defaultValue) {
  const valueFromLs = localStorage.getItem(key);
  return !valueFromLs ? defaultValue : JSON.parse(valueFromLs);
}

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

  tasksArray.push(newTask);
  todoForm.elements.task.value = "";
  updateLocal(TASK_ARRAY, tasksArray);
  renderList();
});

function renderList() {
  taskList.innerHTML = "";
  if (tasksArray.length > 0) {
    tasksArray.forEach(function (user) {
      const taskWrapper = document.createElement("div");
      taskWrapper.classList.add("taskWrapper");
      taskWrapper.setAttribute("data-id", user.id);

      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("value", "isDone");
      taskWrapper.append(checkbox);

      const text = document.createElement("p");
      text.textContent = user.name;
      text.classList.add("description");
      taskWrapper.append(text);

      const btn = document.createElement("button");
      btn.classList.add("btn-delete");
      btn.innerText = "Видалити";
      taskWrapper.append(btn);

      taskList.append(taskWrapper);
    });
  }
}
renderList();

taskList.addEventListener("click", function (event) {
  const action = event.target.classList.contains("btn-delete");
  if (!action) return;

  const id = event.target.closest("[data-id]").getAttribute("data-id");

  tasksArray.splice(id, 1);

  updateLocal(TASK_ARRAY, tasksArray);
  renderList();
});

taskList.addEventListener("change", function (event) {
  event.target.getAttribute("type");
  const id = event.target.closest("[data-id]").getAttribute("data-id");
  const task = tasksArray.find((taskItem) => taskItem.id == id);
  const element = document.querySelector(`[data-id="${id}"]`);
  task.isDone = event.target.checked;

  if (event.target.checked) {
    element.querySelector("p").classList.add("doneTask");
    updateLocal(TASK_ARRAY, tasksArray);
    return;
  }

  element.querySelector("p").classList.remove("doneTask");

  updateLocal(TASK_ARRAY, tasksArray);
  //   renderList();
});

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
      updateLocal(TASK_ARRAY, tasksArray);
  }
});
