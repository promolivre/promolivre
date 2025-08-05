document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const prevButton = document.querySelector('.carousel-btn.prev');
  const nextButton = document.querySelector('.carousel-btn.next');
  const items = Array.from(track.children);
  let currentIndex = 0;

  function getVisibleCount() {
    return window.innerWidth <= 768 ? 1 : 3;
  }

  function updateCarousel() {
    const itemWidth = items[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
  }

  function scrollNext() {
    if (currentIndex < items.length - getVisibleCount()) {
      currentIndex++;
      updateCarousel();
    }
  }

  function scrollPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }

  nextButton.addEventListener('click', scrollNext);
  prevButton.addEventListener('click', scrollPrev);
  window.addEventListener('resize', updateCarousel);
  window.addEventListener('load', updateCarousel);

  // Carrossel automático
  setInterval(scrollNext, 5000);

  // Mostrar categoria padrão
  window.mostrarCategoria = function(categoria) {
    const secoes = document.querySelectorAll('.categoria-section');
    secoes.forEach(secao => secao.style.display = 'none');
    const ativa = document.getElementById(categoria);
    if (ativa) ativa.style.display = 'block';
  };
  mostrarCategoria('celulares');
});
