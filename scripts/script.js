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






//fetch van eigen pagina om door te scrollen onderkant pagina. infinte scroll