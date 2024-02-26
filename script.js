

const side1 = document.querySelector('.side1');
const side2 = document.querySelector('.side2');

window.addEventListener('scroll', () => {
    // While scrolling move left side of the picture to the left
    side1.style.left = -window.scrollY + 'px';

    // While scrolling move left side of the picture to the right
    side2.style.left = window.scrollY + 'px';
});