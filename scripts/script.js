// JavaScript Document

//BACK TO TOP BUTTON
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 500) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

const fadeH1 = document.querySelector("H1"); //is de manier waarop ik de h1 aanspreek goed?

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        fadeH1.classList.add("fade");
    } else {
        fadeH1.classList.remove("fade");
    }
})

const fadeLogo = document.querySelector("nav figure"); //is de manier waarop ik de h1 aanspreek goed?

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        fadeLogo.classList.add("fade");
    } else {
        fadeLogo.classList.remove("fade");
    }
})

 




//fetch van eigen pagina om door te scrollen onderkant pagina. infinte scroll