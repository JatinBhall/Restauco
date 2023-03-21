let userId = document.querySelector('#userId');
let password = document.querySelector('#password');

function formValidation() {
    if (userId.value == null || userId.value == "") {
        userId.nextElementSibling.textContent = "Invalid input";
    }else{
        userId.nextElementSibling.textContent = "";
    }
}