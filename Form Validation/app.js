// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");
const zip = document.getElementById("zip");
const zipError = document.querySelector("#zip + span.error");
const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");
const passConfirm = document.getElementById("password-confirm");
const passConfirmError = document.querySelector("#password-confirm + span.error");

window.onload = function() {
    email.value = "";
    country.value = "";
    zip.value = "";
    password.value = "";
    passConfirm.value = "";
};

email.addEventListener("input", (event) => {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (email.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        emailError.textContent = ""; // Reset the content of the message
        emailError.className = "error"; // Reset the visual state of the message
    } else {
        // If there is still an error, show the correct error
        showError();
    }
});

zip.addEventListener("input", (event) => {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (zip.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        zipError.textContent = ""; // Reset the content of the message
        zipError.className = "error"; // Reset the visual state of the message
    } else {
        // If there is still an error, show the correct error
        showError();
    }
});
country.addEventListener("input", (event) => {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (country.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        countryError.textContent = ""; // Reset the content of the message
        countryError.className = "error"; // Reset the visual state of the message
    } else {
        // If there is still an error, show the correct error
        showError();
    }
});
password.addEventListener("input", (event) => {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (password.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        passwordError.textContent = ""; // Reset the content of the message
        passwordError.className = "error"; // Reset the visual state of the message
    } else {
        // If there is still an error, show the correct error
        showError();
    }
});
passConfirm.addEventListener("input", (event) => {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (passConfirm.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        passConfirmError.textContent = ""; // Reset the content of the message
        passConfirmError.className = "error"; // Reset the visual state of the message
    } else {
        // If there is still an error, show the correct error
        showError();
    }
});


form.addEventListener("submit", (event) => {
    // if the email field is valid, we let the form submit
    if (!email.validity.valid || !country.validity.valid || !zip.validity.valid || !password.validity.valid || !passConfirm.validity.valid) {
        // If it isn't, we display an appropriate error message
        showError();
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
    }
});

function showError() {
    if (email.validity.valueMissing) {
        // If the field is empty,
        // display the following error message.
        emailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
        // If the field doesn't contain an email address,
        // display the following error message.
        emailError.textContent = "Entered value needs to be an email address.";
    } else if (email.validity.tooShort) {
        // If the data is too short,
        // display the following error message.
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    } else {
        // If there are no errors in the email field, reset the error message.
        emailError.textContent = "";
    }

    //country error
    if (country.validity.valueMissing) {
        countryError.textContent = `Please Select Your Country`;
    } else {
        countryError.textContent = "";
    }
    //zip error
    if (zip.validity.valueMissing) {
        zipError.textContent = `Please enter your ZIP code.`;
    } else if (zip.validity.patternMismatch) {
        zipError.textContent = `Please enter your ZIP code.`;
    } else {
        zipError.textContent = "";
    }

    //password error
    if (password.validity.valueMissing) {
        passwordError.textContent = `Please enter your password`;
    } else if (password.validity.patternMismatch) {
        passwordError.textContent = `Password must be at least 8 characters and contain at least one lowercase letter, one uppercase letter, and one number.`;
    } else {
        passwordError.textContent = "";
    }

    //pass confirm error
    if (passConfirm.validity.valueMissing) {
        passConfirmError.textContent = `Please confirm your password.`;
    } else if (confirmPassword.value !== password.value) {
        passConfirmError.textContent = `Passwords do not match.`;



    } else {
        passConfirm.textContent = "";
    }


    // Set the styling appropriately
    emailError.className = "error active";
    countryError.className = "error active";
    zipError.className = "error active";
    passwordError.className = "error active";
    passConfirmError.className = "error active";

}