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
    var navLinks = document.querySelectorAll(".nav-item");
    var navDelay = 1;
    hamBurger.addEventListener("click", () =>{
        navMenu.classList.toggle("make-visible");
        hamBurger.classList.toggle("cross-icon");    
    });

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", () => {
            navMenu.classList.remove("make-visible");
        });

        //for animations
        navLinks[i].style.animation = `slideIn ${navDelay / 1.5}s`;
        navDelay+=0.35;
    }
    navMenu.style.animation = "inFromBottom 1s";
}