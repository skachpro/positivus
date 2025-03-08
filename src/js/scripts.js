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

document.querySelectorAll(".accordion-item").forEach((accordItem) => {
    const accordAbout = accordItem.querySelector(".accordion-item-about");
    const accordPlus = accordItem.querySelector(".accordion-item-label");

    accordItem.addEventListener("click", () => {
        accordAbout.classList.toggle("db");
        accordItem.classList.toggle("db");
        accordPlus.classList.toggle("active");
    });
});