//Get rid of Preloader
// window.addEventListener('load', () => {
//     var loader = document.querySelector(".loader"); //on class 'loader'
//     loader.classList.add('load-finish');  
// });
//loader ends here

//on click ham-burger events
navHam();
function navHam(){
    var hamBurger = document.querySelector(".nav-container");
    var navMenu = document.querySelector(".nav-menu");
    hamBurger.addEventListener("click", () =>{
        navMenu.classList.toggle("make-visible");
    });
}