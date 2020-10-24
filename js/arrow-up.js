const buttonToUP = document.querySelector('.arrow-up'); // BUTTON ARROW UP

// ARROW UP
window.addEventListener("scroll", () => {
    let position = window.pageYOffset;
    if(position > 600) {
        buttonToUP.style.display = "flex";
    } else {
        buttonToUP.style.display = "none";
    };
});

buttonToUP.addEventListener("click", () => {
    window.scrollBy(0, -1 * window.pageYOffset)
});