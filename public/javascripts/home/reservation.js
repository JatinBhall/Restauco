// reservation form validation
function formValidation() {
    let numberOfGuest = document.querySelector("form #numberOfGuest");
    let phone = document.querySelector("form #phone");
    let email = document.querySelector("form #email");
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
        alert(date.value);
        return true;
    }
}