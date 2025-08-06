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
  if (currentIndex < items.length - getVisibleCount()) currentIndex++;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) currentIndex--;
  updateCarousel();
});

function getVisibleCount() {
  return window.innerWidth <= 768 ? 1 : 3;
}

window.addEventListener('resize', updateCarousel);
window.addEventListener('load', updateCarousel);

<script>
function nextSlide(button) {
  const carousel = button.closest('.carousel');
  const images = carousel.querySelector('.carousel-images');
  const imgWidth = images.querySelector('img').clientWidth;
  images.scrollBy({ left: imgWidth, behavior: 'smooth' });
}

function prevSlide(button) {
  const carousel = button.closest('.carousel');
  const images = carousel.querySelector('.carousel-images');
  const imgWidth = images.querySelector('img').clientWidth;
  images.scrollBy({ left: -imgWidth, behavior: 'smooth' });
}

</script>

