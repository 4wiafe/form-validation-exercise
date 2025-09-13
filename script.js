const form = document.querySelector(".form");
const emailInput = document.querySelector("#email");
const postalCode = document.querySelector("#postal-code");
const country = document.querySelector("#country");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const errorMessages = document.querySelectorAll(".error");

function showEmailError() {
  const message = errorMessages[0];

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

function showCountryError() {
  const message = errorMessages[1];

  if (country.value === "Select your country") {
    message.textContent = "Select a country.";
    message.classList.add("active");
  } else if(country.value !== "Select a country") {
    message.classList.remove("active");
  }
}

function showPasswordError() {
  const message = errorMessages[2];

  if (password.value.length < 8) {
    message.textContent = "Password must be at least 8 characters.";
    message.classList.add("active");
  } else {
    message.classList.remove("active");
  }
}

emailInput.addEventListener("input", showEmailError);
country.addEventListener("input", showCountryError);
password.addEventListener("input", showPasswordError);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  showEmailError();
  showCountryError();
  showPasswordError();
});
