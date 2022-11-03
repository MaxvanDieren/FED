// JavaScript Document
console.log("hi");
var eersteStreepjesButton = document.querySelector("body header nav ul:first-of-type li button");
eersteStreepjesButton.addEventListener("click", eersteStreepjesButtonKlik);

function eersteStreepjesButtonKlik(){
    eersteStreepjesButton.classList.toggle("menuOpen");
}



//klik op menu spreekt functie aan om te checken of class show menu er is.
//als dat true is dan verwijdert de class - zo niet voegt het toe
//verberg ook het open menu icoon en show close


//foreach -- blijven klikken op het menu om hem te opnenen of afsluiten 
//Bij een klik - dus eventlistener






//fetch van eigen pagina om door te scrollen onderkant pagina. infinte scroll