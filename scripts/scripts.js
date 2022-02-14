AOS.init();

window.addEventListener("scroll", scrollStick);
window.addEventListener("scroll", scrollStickSmall);

var navbar = document.getElementById("nav-bar");
var sticky = navbar.offsetTop;

function scrollStick() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

var navbarSmall = document.getElementById("hidden");
var stickySmall = navbarSmall.offsetTop;

function scrollStickSmall() {
    if (window.scrollY >= stickySmall) {
        navbarSmall.classList.add("show-hidden");
    } else {
        navbarSmall.classList.remove("show-hidden");
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

document.getElementById("hidden").addEventListener('click', function(){
    document.getElementById("nav-bar").classList.toggle("menu-show");
});

document.getElementById("sign-up").addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(".sign-up-modal").classList.add("show");
});

document.getElementById("close-sign-up").addEventListener('click', function(){
    document.querySelector(".sign-up-modal").classList.remove("show");
});

document.getElementById("form1").addEventListener("submit", function(){
    localStorage.setItem("fullname", document.getElementById("name").value);
    localStorage.setItem("email", document.getElementById("email").value);
});

setTimeout(function(){
    if (!localStorage.noFirstVisit) {
        document.querySelector(".sign-up-modal").classList.add("show");
    
        localStorage.noFirstVisit = "true";
    }
}, 5000);