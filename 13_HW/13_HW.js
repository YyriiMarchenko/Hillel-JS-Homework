"use strict";

const SUCCESS_CLASSNAME = "success";
const ERROR_CLASSNAME = "error";

function highlightValidationHint(hintEl, isValid) {
  if (isValid) {
    hintEl.classList.add(SUCCESS_CLASSNAME);
    hintEl.classList.remove(ERROR_CLASSNAME);
  } else {
    hintEl.classList.remove(SUCCESS_CLASSNAME);
    hintEl.classList.add(ERROR_CLASSNAME);
  }
}
const form = document.forms["user"];
form.elements["name"].addEventListener("input", function () {
  const capitalLetterName = /^[A-Z]{1}[a-z]*\s[A-Z]{1}[a-z]*/;
  highlightValidationHint(
    document.getElementById("name validation"),
    capitalLetterName.test(this.value)
  );
});

form.elements["phon number"].addEventListener("input", function () {
  const phoneNumberValidation = /^[+{1}]\d{12}$/;
  highlightValidationHint(
    document.getElementById("phone number"),
    phoneNumberValidation.test(this.value)
  );
});

form.elements["email"].addEventListener("input", function () {
  const emailValidation = /^\w+([\.]?\w+)*@\w+([\.]?\w+)*(\.\w{2,3})$/;
  highlightValidationHint(
    document.getElementById("email validation"),
    emailValidation.test(this.value)
  );
});

form.elements["credit card"].addEventListener("input", function () {
  const cardValidation = /\d{16}/;
  highlightValidationHint(
    document.getElementById("card validation"),
    cardValidation.test(this.value)
  );
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (
    document
      .getElementById("name validation")
      .classList.contains(SUCCESS_CLASSNAME) &&
    document
      .getElementById("phone number")
      .classList.contains(SUCCESS_CLASSNAME) &&
    document
      .getElementById("email validation")
      .classList.contains(SUCCESS_CLASSNAME) &&
    document
      .getElementById("card validation")
      .classList.contains(SUCCESS_CLASSNAME)
  ) {
    form.querySelectorAll("input").forEach((element) => {
      element.value = "";
    });
    const validation = form.querySelectorAll("p");
    validation.forEach(function (item) {
      item.classList.remove(SUCCESS_CLASSNAME);
    });
  }
});
