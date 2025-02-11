'use strict';
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 0;
let interval;
// Function to show the current image
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}
// Move to next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}
// Move to previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}
// Handle dot clicks
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
});
// Start auto-cycle
function startAutoSlide() {
  interval = setInterval(nextSlide, 3000);
}
// Stop auto-cycle on hover
document
  .querySelector('.carousel')
  ?.addEventListener('mouseover', () => clearInterval(interval));
document
  .querySelector('.carousel')
  ?.addEventListener('mouseleave', startAutoSlide);
// Add event listeners
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
// Initialize
showSlide(currentIndex);
startAutoSlide();
