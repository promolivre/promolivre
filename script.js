document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btn-hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (!btn || !mobileNav) {
    console.warn('Hamburger ou mobile-nav não encontrados no DOM.');
    return;
  }

  // cria overlay se não existir
  let overlay = document.querySelector('.nav-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);
  }

  function openNav() {
    mobileNav.classList.add('open');
    overlay.classList.add('show');
    btn.setAttribute('aria-expanded', 'true');
    mobileNav.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  }

  function closeNav() {
    mobileNav.classList.remove('open');
    overlay.classList.remove('show');
    btn.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
  }

  // toggle no clique do botão
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (mobileNav.classList.contains('open')) closeNav();
    else openNav();
  });

  // fechar ao clicar no overlay
  overlay.addEventListener('click', closeNav);

  // fechar ao clicar em um link do menu (comportamento comum)
  mobileNav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') closeNav();
  });

  // fechar com ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) closeNav();
  });

  // segurança: se outro script impedir clique (pointer-events), força foco no botão
  btn.style.pointerEvents = 'auto';
});

