// script.js

document.addEventListener('DOMContentLoaded', () => {
  // MENU MOBILE
  const btnHamburger = document.getElementById('btn-hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  btnHamburger.addEventListener('click', () => {
    const expanded = btnHamburger.getAttribute('aria-expanded') === 'true';
    btnHamburger.setAttribute('aria-expanded', !expanded);
    mobileNav.classList.toggle('open');
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      btnHamburger.setAttribute('aria-expanded', false);
    });
  });

  // CARROSSEL AUTOMÁTICO
  const track = document.querySelector('.product-grid');
  const slides = document.querySelectorAll('.product');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let index = 0;
  let autoSlide;

  function showSlide(i) {
    const slideWidth = slides[0].offsetWidth + 15;
    track.style.transform = `translateX(${-i * slideWidth}px)`;
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  function startAuto() {
    stopAuto();
    autoSlide = setInterval(nextSlide, 4000);
  }

  function stopAuto() {
    clearInterval(autoSlide);
  }

  nextBtn.addEventListener('click', () => { nextSlide(); startAuto(); });
  prevBtn.addEventListener('click', () => { prevSlide(); startAuto(); });

  startAuto();
  window.addEventListener('resize', () => showSlide(index));
});
