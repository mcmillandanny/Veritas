


///Hamburger Toggle



const hamburger = document.querySelector('.hamburger');
const lines = document.querySelectorAll('.lines');
const nav = document.querySelector("nav");

function hamburgerToggle() {
    lines.forEach(function(line) {
        line.classList.toggle("change"); 
        nav.classList.toggle("toggle-nav");
    });
};
hamburger.addEventListener("click", hamburgerToggle);