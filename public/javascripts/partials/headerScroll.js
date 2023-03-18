
let loc = String(this.window.location.pathname);

if (loc.includes('adminLogin')) {

    let topHeader = document.getElementById('topHeader');
    try {
        topHeader.firstElementChild.classList.add('position-static');
        topHeader.firstElementChild.classList.remove('position-absolute');
        topHeader.firstElementChild.classList.remove('top-0');
        topHeader.firstElementChild.classList.remove('start-50');
        topHeader.firstElementChild.classList.remove('translate-middle-x');
        topHeader.firstElementChild.classList.remove('w-100');
    } catch (err) {
        console.log(err);
    }
    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            try {
                let topHeader = document.getElementById('topHeader');
                topHeader.firstElementChild.classList.remove('position-static');
                topHeader.firstElementChild.classList.add('position-fixed');
                topHeader.firstElementChild.classList.add('top-0');
                topHeader.firstElementChild.classList.add('start-50');
                topHeader.firstElementChild.classList.add('translate-middle-x');
                topHeader.firstElementChild.classList.add('w-100');
            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                topHeader.firstElementChild.classList.add('position-static');
                topHeader.firstElementChild.classList.remove('position-fixed');
                topHeader.firstElementChild.classList.remove('top-0');
                topHeader.firstElementChild.classList.remove('start-50');
                topHeader.firstElementChild.classList.remove('translate-middle-x');
                topHeader.firstElementChild.classList.remove('w-100');
            } catch (err) {
                console.log(err);
            }
        }
    });
} else {

    window.addEventListener('scroll', function () {
        let topHeader = document.getElementById('topHeader');

        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            topHeader.firstElementChild.firstElementChild.classList.remove('bg-transparent');
            topHeader.firstElementChild.firstElementChild.classList.add('bg-custom');
            topHeader.firstElementChild.firstElementChild.classList.add('shadow-lg');

            topHeader.firstElementChild.classList.remove('position-absolute');
            topHeader.firstElementChild.classList.add('position-fixed');

            document.querySelector(".admin").classList.add('admin-scroll');
            document.querySelector(".admin").classList.remove('admin');
        } else {
            topHeader.firstElementChild.firstElementChild.classList.add('bg-transparent');
            topHeader.firstElementChild.firstElementChild.classList.remove('bg-custom');
            topHeader.firstElementChild.firstElementChild.classList.remove('shadow-lg');

            topHeader.firstElementChild.classList.add('position-absolute');
            topHeader.firstElementChild.classList.remove('position-fixed');

            document.querySelector(".admin-scroll").classList.add('admin');
            document.querySelector(".admin-scroll").classList.remove('admin-scroll');
        }
    });
}