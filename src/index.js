import "./styles.css"

// get all the inputs and form element
const email = document.getElementById("mail");
const country = document.getElementById("country");
const postalCode = document.getElementById("postal-code");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirmation");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent the form from submitting
});