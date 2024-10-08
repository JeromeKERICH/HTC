const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdownBtn = document.querySelector('.drop-btn');
const dropdown = document.querySelector('.dropdown');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('toggle');
    navLinks.classList.toggle('active');
});






// FAQS

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

