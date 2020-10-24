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
    

    //to close hamnburger when a link is clicked
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", () => {
            navMenu.classList.remove("make-visible");
            hamBurger.classList.toggle("cross-icon");
        });

        //for animations
        navLinks[i].style.animation = `slideIn ${navDelay / 1.5}s`;
        navDelay+=0.35;
    }

    //from down to up animation on 
    navMenu.style.animation = "inFromBottom 1s";

    //Changing the nav upon scroll
    $(window).scroll( () => {
        if ($(".navbar").offset().top > 50) {
            $(".fixed-top").addClass("nav-scrolled");
        } else {
            $(".fixed-top").removeClass("nav-scrolled");
        }
    });
}

/*Typed Animation*/
var typed = new Typed('#typed', {
    strings: ["Web Developer", "Programmer", "Blogger"],
    backSpeed: 50,
    typeSpeed: 120,
    loop: true,
    backDelay: 500
});