/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


/* Close menu when clicking a link */

const links = document.querySelectorAll("#navLinks a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("show");

    });

});


/* =========================
   TYPING EFFECT
========================= */

const typing = document.getElementById("typing");

const words = [
    "BSIT STUDENT",
    "FUTURE POLICE OFFICER",
    "ASPIRING IT PROFESSIONAL"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;


function typeEffect() {

    const word = words[wordIndex];

    if (deleting === false) {

        typing.textContent =
            word.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === word.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent =
            word.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}


typeEffect();


// =========================
// PORTFOLIO SLIDES
// =========================

const slides = document.querySelectorAll(
    ".hero, #about, #education, #basketball, #skills, #dream"
);

const slideDots = document.querySelectorAll(".slide-dot");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(function(slide) {
        slide.style.display = "none";
    });

    slides[index].style.display = index === 0 ? "flex":"";

    slideDots.forEach(function(dot) {
        dot.classList.remove("active");
    });

    slideDots[index].classList.add("active");

    currentSlide = index;
}

slideDots.forEach(function(dot, index) {

    dot.addEventListener("click", function() {
        showSlide(index);
    });

});

showSlide(0);

//EXPLORE BUTTON
const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", function(event) {
    event.preventDefault();
    showSlide(1);
});

const nextButtons = document.querySelectorAll(".next-btn");

nextButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const nextSlide = Number(button.dataset.next);
        showSlide(nextSlide);

    });
});



