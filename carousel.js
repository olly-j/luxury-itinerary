// carousel.js

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.testimonial-carousel');
  const testimonials = document.querySelectorAll('.testimonial');
  let currentIndex = 0;
  const total = testimonials.length;
  const interval = 5000; // 5 seconds

  // Clone first testimonial for seamless looping
  const firstClone = testimonials[0].cloneNode(true);
  carousel.appendChild(firstClone);

  setInterval(() => {
    currentIndex++;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    if (currentIndex === total) {
      setTimeout(() => {
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(0)';
        currentIndex = 0;
      }, 500);
    }
  }, interval);
});