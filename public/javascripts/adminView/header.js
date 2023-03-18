let topHeader = document.getElementById('topHeader');

topHeader.firstElementChild.classList.remove('position-absolute');
topHeader.firstElementChild.classList.add('position-static');

window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {

        topHeader.firstElementChild.classList.remove('position-static');
        topHeader.firstElementChild.classList.add('position-fixed');

    } else {
        topHeader.firstElementChild.classList.add('position-static');
        topHeader.firstElementChild.classList.remove('position-fixed');
    }
});
