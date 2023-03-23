
function menuItemFocus(focus){
    let breakFast = document.querySelector("#breakfast");
    let lunch = document.querySelector("#lunch");
    let dinner = document.querySelector("#dinner");
    let breakFast1 = document.querySelector(".menu-item-button1");
    let lunch2 = document.querySelector(".menu-item-button2");
    let dinner3 = document.querySelector(".menu-item-button3");

    if(focus == 'breakFast'){
        breakFast.classList.add('menu-item-focus');
        lunch.classList.remove('menu-item-focus');
        dinner.classList.remove('menu-item-focus');

        breakFast.classList.remove('menu-item-focus-off');
        lunch.classList.add('menu-item-focus-off');
        dinner.classList.add('menu-item-focus-off');

        breakFast1.classList.add('menu-button-focus');
        lunch2.classList.remove('menu-button-focus');
        dinner3.classList.remove('menu-button-focus');

        breakFast1.classList.remove('menu-button-focus-off');
        lunch2.classList.add('menu-button-focus-off');
        dinner3.classList.add('menu-button-focus-off');
        
    }else if(focus == 'lunch'){
        breakFast.classList.remove('menu-item-focus');
        lunch.classList.add('menu-item-focus');
        dinner.classList.remove('menu-item-focus');

        breakFast.classList.add('menu-item-focus-off');
        lunch.classList.remove('menu-item-focus-off');
        dinner.classList.add('menu-item-focus-off');

        breakFast1.classList.remove('menu-button-focus');
        lunch2.classList.add('menu-button-focus');
        dinner3.classList.remove('menu-button-focus');

        breakFast1.classList.add('menu-button-focus-off');
        lunch2.classList.remove('menu-button-focus-off');
        dinner3.classList.add('menu-button-focus-off');
        
    }else{
        breakFast.classList.remove('menu-item-focus');
        lunch.classList.remove('menu-item-focus');
        dinner.classList.add('menu-item-focus');

        breakFast.classList.add('menu-item-focus-off');
        lunch.classList.add('menu-item-focus-off');
        dinner.classList.remove('menu-item-focus-off');

        breakFast1.classList.remove('menu-button-focus');
        lunch2.classList.remove('menu-button-focus');
        dinner3.classList.add('menu-button-focus');

        breakFast1.classList.add('menu-button-focus-off');
        lunch2.classList.add('menu-button-focus-off');
        dinner3.classList.remove('menu-button-focus-off');
        
    }
}

menuItemFocus('breakFast');