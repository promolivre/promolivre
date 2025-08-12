// script.js - Funcionalidades do PromoLivre

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menuCategorias');
  const btnBuscar = document.getElementById('btnBuscar');
  const campoPesquisa = document.getElementById('campoPesquisa');
  const track = document.querySelector('.carousel-track');
  const prevButton = document.querySelector('.carousel-btn.prev');
  const nextButton = document.querySelector('.carousel-btn.next');
  const items = Array.from(track.children);
  let currentIndex = 0;

  // Menu responsivo
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  // Busca de produtos
  btnBuscar.addEventListener('click', buscarProduto);
  campoPesquisa.addEventListener('keypress', e => {
    if (e.key === 'Enter') buscarProduto();
  });

  function buscarProduto() {
    const termo = campoPesquisa.value.toLowerCase();
    if (termo.trim() === '') return;

    document.querySelectorAll('.card').forEach(card => {
      const nome = card.querySelector('h3').textContent.toLowerCase();
      card.style.display = nome.includes(termo) ? '' : 'none';
    });
  }

  // Carrossel
  function updateCarousel() {
    const itemWidth = items[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
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
  updateCarousel();
});
