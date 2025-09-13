const form = document.querySelector(".form");
const emailInput = document.querySelector("#email");
const postalCode = document.querySelector("#postal-code");
const country = document.querySelector("#country");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const errorMessages = document.querySelectorAll(".error");

function showEmailError() {
  let message = errorMessages[0];

  if (emailInput.validity.typeMismatch) {
    message.textContent = "Invalid email address.";
    message.classList.add("active");
  } else if (emailInput.validity.valueMissing) {
    message.textContent = "Enter an email address.";
    message.classList.add("active");
  } else {
    message.classList.remove("active");
  }
}

emailInput.addEventListener("input", showEmailError);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  showEmailError();
});
