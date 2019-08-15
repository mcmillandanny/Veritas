'use strict';

///Hamburger Toggle

var hamburger = document.querySelector('.hamburger');
var lines = document.querySelectorAll('.lines');
var nav = document.querySelector("nav");
var overlayNav = document.querySelector(".overlay-wrap");

function hamburgerToggle() {
    lines.forEach(function (line) {
        line.classList.toggle("change");
        nav.classList.toggle("toggle-nav");
        overlayNav.classList.toggle("opacity-overlay");
    });
};
hamburger.addEventListener("click", hamburgerToggle);
//# sourceMappingURL=main.js.map
