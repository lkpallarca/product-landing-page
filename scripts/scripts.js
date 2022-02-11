AOS.init();

window.onscroll = function() {scrollStick()};

var navbar = document.getElementById("nav-bar");
var sticky = navbar.offsetTop;

function scrollStick() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides");
    
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if(newIndex < 0) newIndex = slides.children.length - 1;
        if(newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});

document.getElementById("sign-up").addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(".sign-up-modal").classList.add("show");
});

document.getElementById("log-in").addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(".log-in-modal").classList.add("show");
});

document.getElementById("close-sign-up").addEventListener('click', function(){
    document.querySelector(".sign-up-modal").classList.remove("show");
});

document.getElementById("close-log-in").addEventListener('click', function(){
    document.querySelector(".log-in-modal").classList.remove("show");
});