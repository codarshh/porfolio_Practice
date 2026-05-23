const preloader  = document.querySelector('[data-preloader]');

// window.addEventListener("DOMContentLoaded", function (){
//   preloader.classList.add("loaded");
//   document.body.classList.add("loaded"); 
// });

window.addEventListener("load", function () {

    setTimeout(() => {
        preloader.classList.add("loaded");
        document.body.classList.add("loaded");
    }, 1500);

});