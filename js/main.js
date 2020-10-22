//Get rid of Preloader

window.addEventListener('load', () => {
    var loader = document.querySelector(".loader"); //on class 'loader'
    loader.classList.add('load-finish');  
})