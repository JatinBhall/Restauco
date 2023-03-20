let focus = document.querySelector("#focus").value;
let menu = document.querySelector("#menu");
let customer = document.querySelector("#customer");

function changeFocus(focus) {
    if (focus == 'menu') {
        menu.classList.remove('d-none');
        menu.classList.add('d-flex');
        customer.classList.remove('d-flex');
        customer.classList.add('d-none');
    } else {
        customer.classList.remove('d-none');
        customer.classList.add('d-flex');
        menu.classList.remove('d-flex');
        menu.classList.add('d-none');

    }
}

document.addEventListener('load', changeFocus(focus));
document.querySelector("#menu-button").addEventListener('click',changeFocus('menu'));
document.querySelector("#customer-button").addEventListener('click',changeFocus('customer'));