// JavaScript for toggling navigation
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const heroSection = document.querySelector('#hero');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
    heroSection.classList.toggle('shifted');
});
