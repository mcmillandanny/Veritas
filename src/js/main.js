


///Hamburger Toggle

const hamburger = document.querySelector('.hamburger');
const lines = document.querySelectorAll('.lines');
const nav = document.querySelector("nav");
const overlayNav = document.querySelector(".overlay-wrap");


function hamburgerToggle() {
    lines.forEach(function(line) {
        line.classList.toggle("change"); 
        nav.classList.toggle("toggle-nav"); 
        overlayNav.classList.toggle("opacity-overlay")
    });
};
hamburger.addEventListener("click", hamburgerToggle);
