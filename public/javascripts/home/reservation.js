// reservation form validation
let name = document.querySelector("form #name");
let numberOfGuest = document.querySelector("form #numberOfGuest");
let date = document.querySelector("form #date");
let category = document.querySelector("form #category");
let phone = document.querySelector("form #phone");
let email = document.querySelector("form #email");
let message = document.querySelector("form #message");

function formValidation() {
    let success = true;

    if (!(numberOfGuest.value < 80 && numberOfGuest.value > 0)) {
        success = false;
        numberOfGuest.nextElementSibling.textContent = "Invalid input";
    } else {
        numberOfGuest.nextElementSibling.textContent = "";
    }

    let phoneno = /^\d{10}$/;
    if (!(phone.value.match(phoneno))) {
        success = false;
        phone.nextElementSibling.textContent = "Invalid Phone Number";
    } else {
        phone.nextElementSibling.textContent = "";
    }

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!(email.value.match(validRegex))) {
        success = false;
        email.nextElementSibling.textContent = "Invalid Email";
    } else {
        email.nextElementSibling.textContent = "";
    }

    if (!success) {
        return false;
    } else {
        return true;
    }
}

function serverSideValidation(locals) {
    numberOfGuest.nextElementSibling.textContent = locals.numberOfGuest.errMessage;
    phone.nextElementSibling.textContent = locals.phone.errMessage;
    email.nextElementSibling.textContent = locals.email.errMessage;

    name.value = locals.data.name;
    numberOfGuest.value = locals.data.numberOfGuest;
    date.value = locals.data.date;
    category.value = locals.data.category;
    phone.value = locals.data.phone;
    email.value = locals.data.email;
    message.value = locals.data.message;
};