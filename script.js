document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.product-grid');
    const slides = document.querySelectorAll('.product-grid .product');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let index = 0;
    let autoSlide;

    function showSlide(i) {
        const slideWidth = slides[0].offsetWidth + 16; // 16 = gap
        track.style.transform = `translateX(${-i * slideWidth}px)`;
    }

    function nextSlide() {
        index++;
        if (index >= slides.length) index = 0;
        showSlide(index);
    }

    function prevSlide() {
        index--;
        if (index < 0) index = slides.length - 1;
        showSlide(index);
    }

    function startAuto() {
        stopAuto();
        autoSlide = setInterval(nextSlide, 4000);
    }

    function stopAuto() {
        clearInterval(autoSlide);
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        startAuto();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        startAuto();
    });

    startAuto();
    window.addEventListener('resize', () => showSlide(index));
});
