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

const timerForm = document.forms.timerdesk;
const taskList = document.querySelector(".tasks");

timerForm.elements.task.addEventListener("input", function () {
  this.classList.remove(errorClass);
  this.closest(".fieldWrapper")
    .querySelectorAll(".errorText")
    .forEach((error) => error.remove());
});

timerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (timerForm.elements.task.value.trim() === "") {
    addErrorMessege(timerForm.elements.task, "enter date");
    return;
  }

  const endDate = new Date(timerForm.elements.task.value);
  console.log(endDate);
  let nowLoc = new Date();

  let tLoc = endDate - nowLoc;

  if (tLoc < 0) {
    addErrorMessege(
      timerForm.elements.task,
      "enter a date greater than the current one"
    );
  }

  const timer = setInterval(function () {
    let now = new Date();

    let t = endDate - now;

    console.log(t);
    if (t > 0) {
      let days = Math.floor(t / 1000 / 60 / 60 / 24);
      let hours = Math.floor((t / 1000 / 60 / 60) % 24);
      let mins = Math.floor((t / 1000 / 60) % 60);
      let secs = Math.floor((t / 1000) % 60);
      console.log(hours);

      const daysVal = document.querySelector("#timer-days_val");
      const hoursVal = document.querySelector("#timer-hours_val");
      const minsVal = document.querySelector("#timer-mins_val");
      const secsVal = document.querySelector("#timer-secs_val");
      console.log(daysVal);

      daysVal.textContent = days;
      hoursVal.textContent = ("0" + hours).slice(-2);
      minsVal.textContent = ("0" + mins).slice(-2);
      secsVal.textContent = ("0" + secs).slice(-2);
    } else {
      clearInterval(timer);
    }
  }, 1000);

  timerForm.elements.task.value = "";
});
