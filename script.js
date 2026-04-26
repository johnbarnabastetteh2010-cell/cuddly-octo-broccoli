// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in Animations on Scroll
const fadeElements = document.querySelectorAll('.fade-in');
const fadeInOnScroll = () => {
    fadeElements.forEach(elem => {
        if (elem.getBoundingClientRect().top < window.innerHeight) {
            elem.classList.add('visible');
        }
    });
};
window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll(); // Initial check

// Sticky Navigation
const navbar = document.querySelector('.navbar');
const stickyOffset = navbar.offsetTop;
const stickyNav = () => {
    if (window.scrollY > stickyOffset) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};
window.addEventListener('scroll', stickyNav);

// Floating Book Button
const bookButton = document.querySelector('.book-button');
const toggleBookButton = () => {
    if (window.scrollY > 300) {
        bookButton.classList.add('visible');
    } else {
        bookButton.classList.remove('visible');
    }
};
window.addEventListener('scroll', toggleBookButton);

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const emailInput = document.querySelector('input[type="email"]');
    if (!emailInput.value.includes('@')) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Interactive Hover Effects
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        item.classList.remove('hover');
    });
});

// Gallery Animations
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
    img.addEventListener('load', () => {
        img.classList.add('fade-in');
    });
});

// Footer Year Update
const footerYear = document.querySelector('.footer-year');
footerYear.textContent = new Date().getFullYear();

// Lazy Loading
const lazyImages = document.querySelectorAll('img.lazy');
const lazyLoad = () => {
    lazyImages.forEach(img => {
        if (img.getBoundingClientRect().top < window.innerHeight) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        }
    });
};
window.addEventListener('scroll', lazyLoad);
lazyLoad(); // Initial check

// Accessibility Features
document.querySelectorAll('a').forEach(anchor => {
    anchor.setAttribute('role', 'button');
    anchor.setAttribute('tabindex', '0');
});