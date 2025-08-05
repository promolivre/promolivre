const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
const items = Array.from(track.children);
let currentIndex = 0;

function updateCarousel() {
  const itemWidth = items[0].getBoundingClientRect().width;
  track.style.transform = 'translateX(-' + (itemWidth * currentIndex) + 'px)';
}

nextButton.addEventListener('click', () => {
  if (currentIndex < items.length - 3) currentIndex++;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) currentIndex--;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
window.addEventListener('load', updateCarousel);
