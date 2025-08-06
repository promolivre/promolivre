// === CARROSSEL DE DESTAQUES (Produtos em Destaque) ===
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const prevButton = document.querySelector('.carousel-btn.prev');
  const nextButton = document.querySelector('.carousel-btn.next');
  const items = Array.from(track.children);
  let currentIndex = 0;

  function updateCarousel() {
    const visibleCount = getVisibleCount();
    const itemWidth = items[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
  }

  function getVisibleCount() {
    return window.innerWidth <= 768 ? 1 : 3;
  }

  nextButton?.addEventListener('click', () => {
    if (currentIndex < items.length - getVisibleCount()) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevButton?.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  window.addEventListener('resize', updateCarousel);
  updateCarousel();

  // Carrossel automático
  setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }, 4000);
});


// === CARROSSEL INTERNO DE IMAGENS (em cards de celular) ===
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


// === FUNÇÃO PARA MOSTRAR CATEGORIAS ===
function mostrarCategoria(categoriaId) {
  const secoes = document.querySelectorAll('.categoria-section');
  secoes.forEach(secao => {
    secao.style.display = 'none';
  });

  const categoria = document.getElementById(categoriaId);
  if (categoria) {
    categoria.style.display = 'block';
    window.scrollTo({ top: categoria.offsetTop - 80, behavior: 'smooth' });
  }
}

// Exibe a seção "Celulares" por padrão ao carregar
window.onload = () => {
  mostrarCategoria('celulares');
};
