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

// function for checking validity of postal code
function checkPostalCode() {
  // For each country, define the pattern that the postal code has to follow
  const constraints = {
    ch: [
      "^(CH-)?\\d{4}$",
      "Swiss postal codes must have exactly 4 digits: e.g. CH-1950 or 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "French postal codes must have exactly 5 digits: e.g. F-75012 or 75012",
    ],
    de: [
      "^(D-)?\\d{5}$",
      "German postal codes must have exactly 5 digits: e.g. D-12345 or 12345",
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Dutch postal codes must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
    ],
  };

  // read the country id
  const countryVal = country.value;

  // build the constraint checker
  const constraint = new RegExp(constraints[countryVal][0], "");

  // check it!
  if (constraint.test(postalCode.value)) {
    // the postal code follows the constraint, we use the ConstraintAPI to tell it
    postalCode.setCustomValidity("");
  } else {
    // the postal code does'nt follow the constraint, we use the ConstraintAPI to 
    // give a message about the format required for this country
    postalCode.setCustomValidity(constraints[countryVal][1]);
    postalCode.reportValidity();
  };
};

// function for checking validity of password
function checkPassword() {
  switch (true) {
    case password.validity.valueMissing:
      password.setCustomValidity("The password field needs to be filled!");
      password.reportValidity();
      break;

    default:
      password.setCustomValidity("");
      break;
  };
}

// check email when there is an input
email.addEventListener("input", (e) => checkEmail());

// check postalCode when there is an input
postalCode.addEventListener("input", checkPostalCode)

// check password when there is an input
password.addEventListener("input", (e) => checkPassword());

// when form is submitted, check all the inputs
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent the form from submitting
  
  checkPassword();
  checkPostalCode();
  checkEmail();
});