const slides = document.querySelectorAll(
  '.slide'
) as NodeListOf<HTMLImageElement>;
const dots = document.querySelectorAll('.dot') as NodeListOf<HTMLSpanElement>;
const prevBtn = document.getElementById('prev-btn') as HTMLButtonElement;
const nextBtn = document.getElementById('next-btn') as HTMLButtonElement;
let currentIndex = 0;
let interval: any;

// Function to show the current image
function showSlide(index: number): void {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

// Move to next slide
function nextSlide(): void {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Move to previous slide
function prevSlide(): void {
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
function startAutoSlide(): void {
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
