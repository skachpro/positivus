const Burger_Button=document.querySelector(".header-menu-burger-menu__button"),Burger_window=document.querySelector(".header-menu-burger-menu__content"),Burger_Close_Btn=document.querySelector(".header-menu-burger-menu__button--close");Burger_Button.onclick=function(){console.log(1),Burger_window.classList.add("db")},Burger_Close_Btn.onclick=function(){console.log(2),Burger_window.classList.remove("db")},document.addEventListener("click",(function(e){e.target.closest(".services-card-figcaption-learn-more")&&(window.location.href="#")})),document.addEventListener("click",(function(e){e.target.closest(".case-studies-figcaption-lm")&&(window.location.href="#")})),document.querySelectorAll(".accordion-item").forEach((e=>{const t=e.querySelector(".accordion-item-about"),o=e.querySelector(".accordion-item-label");e.addEventListener("click",(()=>{t.classList.toggle("db"),e.classList.toggle("db"),o.classList.toggle("active")}))}));let pos=1;const comment=document.querySelector(".tesmonials-comments-items-item"),commentsScroll=document.querySelector(".tesmonials-comments"),leftBtn=document.querySelector(".tesmonials-arrows-left-button"),rightBtn=document.querySelector(".tesmonials-arrows-right-button");document.querySelectorAll(".tesmonials-arrows-button").forEach((e=>{function t(){return{blockWidth:commentsScroll.offsetWidth,commentWidth:comment.offsetWidth}}let{blockWidth:o,commentWidth:s}=t(),n=o/s/2*s-1.5*s;comment.style.margin=`0 0 0 ${n}px`,e.addEventListener("click",(()=>{let{blockWidth:o,commentWidth:s}=t();if(e.classList.contains("tesmonials-arrows-left-button"))if(1==pos)comment.style.marginLeft="0",leftBtn.classList.add("inactive-arrow"),pos-=1,console.log(pos);else if(pos>1){let e=parseFloat(getComputedStyle(comment).marginLeft),t=0;4==pos&&(rightBtn.classList.remove("inactive-arrow"),n=Math.abs(n),t=e+n,console.log("Left Button:",pos,e,n,t),comment.style.margin=`0 0 0 ${t}px`),pos--,comment.style.margin=`0 0 0 -${(pos-1)*s+n}px`,console.log("Left Button:",pos,e,n)}if(e.classList.contains("tesmonials-arrows-right-button")&&(0==pos&&(pos+=1,console.log(pos),leftBtn.classList.remove("inactive-arrow")),pos>=1)){pos<4&&pos++;let e=parseFloat(getComputedStyle(comment).marginLeft);n=Math.abs(n),4==pos?(comment.style.margin=`0 0 0 -${(pos-1)*s+2*n}px`,rightBtn.classList.add("inactive-arrow")):comment.style.margin=`0 0 0 -${(pos-1)*s+n}px`,console.log(pos,e,n)}}))}));const headerMenu=document.querySelector(".header-menu");let scrollTimeout,startScroll=0;window.addEventListener("scroll",(()=>{const e=window.scrollY;clearTimeout(scrollTimeout),startScroll>e&&(headerMenu.classList.add("hide-header"),scrollTimeout=setTimeout((()=>{headerMenu.classList.remove("hide-header")}),200)),startScroll<e&&headerMenu.classList.remove("hide-header"),0==e&&headerMenu.classList.remove("hide-header"),startScroll=e<=0?0:e}));