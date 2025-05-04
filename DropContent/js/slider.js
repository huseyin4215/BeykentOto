const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'previous', 'next');

        if (i === index) {
            slide.classList.add('active'); // Show the current slide
        } else if (i === (index - 1 + slides.length) % slides.length) {
            slide.classList.add('previous'); // Previous slide transitions left
        } else if (i === (index + 1) % slides.length) {
            slide.classList.add('next'); // Next slide waits offscreen to the right
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Event listeners for buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Initialize the carousel with the first slide
showSlide(currentSlide);