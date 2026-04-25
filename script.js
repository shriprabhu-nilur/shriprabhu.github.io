/* ============================================
   Navbar JavaScript Functionality
   - Hamburger toggle
   - Close menu on link click
   - Navbar scroll effect
============================================ */

// Select elements
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");
const navbar = document.querySelector(".navbar");


/* ============================================
   Mobile Hamburger Toggle
============================================ */

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* ============================================
   Close Mobile Menu When Link Clicked
============================================ */

navItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/* ============================================
   Navbar Background Change On Scroll
============================================ */

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0, 0, 0, 0.98)";
        navbar.style.boxShadow = "0 2px 10px rgba(201,162,39,0.3)";
    } else {
        navbar.style.background = "rgba(0, 0, 0, 0.95)";
        navbar.style.boxShadow = "none";
    }
});


/* ============================================
   Typing Animation (Simple Version)
============================================ */

const typingElement = document.getElementById("typing");

const roles = [
    "Python Developer",
    "PHP Application Developer",
    "Generative AI ",
    "Agentic AI ",
    "ML Enthusiast"
    
];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {

    currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }

    } else {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

// Start typing effect when page loads
document.addEventListener("DOMContentLoaded", typeEffect);


/* ============================================
   Scroll Reveal Animation
============================================ */

const revealElements = document.querySelectorAll(".about-section");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

/* Initial state */
revealElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "all 1s ease";
});


/* ============================================
   Skills Progress Animation
============================================ */

const skillSection = document.querySelector(".skills-section");
const progressBars = document.querySelectorAll(".progress");

function showSkills() {

    const sectionTop = skillSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {

        document.querySelector(".python").style.width = "90%";
        document.querySelector(".php").style.width = "85%";
        document.querySelector(".ml").style.width = "80%";
        document.querySelector(".dl").style.width = "75%";
        document.querySelector(".nlp").style.width = "70%";
        document.querySelector(".ai").style.width = "75%";
    }
}

window.addEventListener("scroll", showSkills);
