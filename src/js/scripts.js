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

let pos = 1
const comment = document.querySelector(".tesmonials-comments-items-item")
const commentsScroll = document.querySelector(".tesmonials-comments")
const leftBtn = document.querySelector(".tesmonials-arrows-left-button");
const rightBtn = document.querySelector(".tesmonials-arrows-right-button");

document.querySelectorAll(".tesmonials-arrows-button").forEach((button)=>{
    
    function updateElemWidth(){
        let blockWidth = commentsScroll.offsetWidth;
        let commentWidth = comment.offsetWidth;
        return {blockWidth,commentWidth}
    }
    let {blockWidth,commentWidth} = updateElemWidth()
    let marginLeft = (blockWidth/commentWidth)/2*commentWidth-1.5*commentWidth
    comment.style.margin = `0 0 0 ${marginLeft}px`
    button.addEventListener('click', ()=>{
        let {blockWidth,commentWidth} = updateElemWidth()
        if(button.classList.contains("tesmonials-arrows-left-button")){
            if (pos == 1){
                comment.style.marginLeft = `0`
                leftBtn.classList.add('inactive-arrow')
                pos-=1
                console.log(pos)
            }else if(pos > 1){
                let presentMargin = parseFloat(getComputedStyle(comment).marginLeft)
                let margin4 = 0
                if(pos==4){
                    rightBtn.classList.remove('inactive-arrow')
                    marginLeft = Math.abs(marginLeft)
                    margin4 = presentMargin+marginLeft
                    console.log("Left Button:",pos,presentMargin,marginLeft,margin4)
                    comment.style.margin = `0 0 0 ${margin4}px`
                }
                pos--
                comment.style.margin = `0 0 0 -${(pos-1)*commentWidth+marginLeft}px`
                console.log("Left Button:",pos,presentMargin,marginLeft)
                
            }
        }
        if(button.classList.contains("tesmonials-arrows-right-button")){
            if(pos == 0){
                pos+=1
                console.log(pos)
                leftBtn.classList.remove('inactive-arrow')
            }
            if(pos >=1){
                if(pos < 4){pos++}
                let presentMargin = parseFloat(getComputedStyle(comment).marginLeft)
                marginLeft = Math.abs(marginLeft)
                if (pos == 4){
                    comment.style.margin = `0 0 0 -${(pos-1)*commentWidth+2*marginLeft}px`
                    rightBtn.classList.add('inactive-arrow')
                }else{
                    comment.style.margin = `0 0 0 -${(pos-1)*commentWidth+marginLeft}px`
                }
                console.log(pos,presentMargin,marginLeft)
                
            }
        }
    })
})
