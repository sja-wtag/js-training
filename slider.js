let current = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

document.querySelector('.prev').addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
});

document.querySelector('.next').addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
});

// Initialize
showSlide(current);
