const buttonMenuOpen = document.querySelector('.nav__menu-mobile-img'); // MENU OPEN BUTTON
const buttonMenuClose = document.querySelector('.nav__menu-mobile-list-close'); // MENU CLOSE BUTTON
const mobileMenu = document.querySelector('.nav__menu-mobile-list'); // MOBILE MENU

// DROP-DOWN MENU
buttonMenuOpen.addEventListener("click", () => {
    mobileMenu.classList.add("nav__menu-mobile-list--toggle");
});
buttonMenuClose.addEventListener("click", () => {
    mobileMenu.classList.remove("nav__menu-mobile-list--toggle");
});