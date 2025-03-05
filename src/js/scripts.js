const Burger_Button = document.querySelector(".header-menu-burger-menu__button")
const Burger_window = document.querySelector(".header-menu-burger-menu__content")
const Burger_Close_Btn = document.querySelector(".header-menu-burger-menu__button--close") 

Burger_Button.onclick = function (){
    console.log(1)
    Burger_window.classList.add("db")
}

Burger_Close_Btn.onclick = function(){
    console.log(2)
    Burger_window.classList.remove("db")
}


document.addEventListener("click", function(event) {
    if (event.target.closest(".services-card-figcaption-learn-more")) {
        window.location.href = "#";
    }
});

document.addEventListener("click", function(event) {
    if (event.target.closest(".case-studies-figcaption-lm")) {
        window.location.href = "#";
    }
});
