let userId = document.querySelector('#userId');
let password = document.querySelector('#password');

function formValidation() {
    let success = true;
    if (userId.value == null || userId.value == "") {
        success = false
        userId.nextElementSibling.textContent = "Invalid input";
        userId.classList.remove('mb-4');
        userId.classList.remove('mt-4');
        userId.classList.add('mt-2');
    } else {
        userId.nextElementSibling.textContent = "";
        userId.classList.add('mb-4');
        userId.classList.add('mt-4');
        userId.classList.remove('mt-2');
    }

    let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!(password.value.match(passw))) {
        success = false
        password.nextElementSibling.textContent = "6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
        password.classList.remove('mb-4');
        password.classList.remove('mt-4');
        password.classList.add('mt-2');
    } else {
        password.nextElementSibling.textContent = "";
        password.classList.add('mb-4');
        password.classList.add('mt-4');
        password.classList.remove('mt-2');
    }

    if (success) {
        return true;
    } else {
        return false;
    }
}
