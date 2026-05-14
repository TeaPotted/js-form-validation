import "./styles.css"

// get all the inputs and form element
const email = document.getElementById("mail");
const country = document.getElementById("country");
const postalCode = document.getElementById("postal-code");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirmation");
const form = document.querySelector("form");

// function for checking validity of email input
function checkEmail() {
  switch (true) {
    // if input is not a valid email
    case email.validity.typeMismatch:
      email.setCustomValidity("Invalid email address");
      email.reportValidity(); // report the error
      break;
    
    // if input is empty
    case email.validity.valueMissing:
      email.setCustomValidity("The email field needs to be filled!");
      email.reportValidity();
      break;

    // else, reset email's customValidity message
    default:
      email.setCustomValidity("");
      break;
  };
};

// check email when there is an input
email.addEventListener("input", (e) => checkEmail());

// when form is submitted, check all the inputs
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent the form from submitting
  
  checkEmail();
});