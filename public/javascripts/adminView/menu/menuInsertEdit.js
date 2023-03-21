let title = document.querySelector(' form #title');
let price = document.querySelector(' form #price');
let category = document.querySelector(' form #category');
let image = document.querySelector(' form #image');
let description = document.querySelector(' form #description');

function formValidation() {
    let success = true;
    if ((title.value == null) || (title.value == "")) {
        success = false;
        title.nextElementSibling.textContent = "Invalid Input,It's empty";
    } else {
        title.nextElementSibling.textContent = "";
    }

    let amount = Number(price.value);
    if ((price.value == "") || (amount <= 0)) {
        success = false;
        price.nextElementSibling.textContent = "Invalid Amount";
    } else {
        price.nextElementSibling.textContent = "";
    }

    // Allowing file type
    let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if (!allowedExtensions.exec(image.value)) {
        success = false;
        image.value = '';
        image.nextElementSibling.textContent = "Invalid file type";
    } else {
        image.nextElementSibling.textContent = "";
    }

    if (success) {
        return true;
    } else {
        return false;
    }
}

function serverSideValidation(data) {
    title.value=data.menuItem.title;
    price.value=data.menuItem.price;
    category.value=data.menuItem.category;
    description.value=data.menuItem.description;

    title.nextElementSibling.textContent = data.title.errMessage;
    price.nextElementSibling.textContent = data.price.errMessage;
    image.nextElementSibling.textContent = data.image.errMessage;

}