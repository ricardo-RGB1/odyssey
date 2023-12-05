const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links'); 
const menuBtnIcon = menuBtn.querySelector('i');


/**
 * Toggle the visibility of the navigation links when the menu button is clicked.
 * @param {Event} event - The click event object.
 */
const toggleNavLinks = (event) => {
    navLinks.classList.toggle('open'); // add or remove class 
    const isOpen = navLinks.classList.contains('open'); // true or false
    menuBtnIcon.setAttribute('class', isOpen ? "ri-close-line" : "ri-menu-line");
};

/**
 * Close the navigation links when a link is clicked.
 * @param {Event} event - The click event object.
 */
const closeNavLinks = (event) => {
    navLinks.classList.remove('open');
    menuBtnIcon.setAttribute('class', "ri-menu-line");
};


menuBtn.addEventListener('click', toggleNavLinks);
navLinks.addEventListener('click', closeNavLinks);



 const swiper = new Swiper(".swiper", {
    slidePerView: "auto",
    spaceBetween: 20,
 });

 const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1500,
 };


// header container 

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container .booking", {
    ...scrollRevealOption,
    delay: 600,
});

// service container 
ScrollReveal().reveal(".service__card", {
    duration: 1000,
    interval: 500,
});

// offer container
ScrollReveal().reveal(".offer__card", {
    ...scrollRevealOption,
    interval: 500,
});