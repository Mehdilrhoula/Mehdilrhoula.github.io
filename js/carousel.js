document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector("#pyjobs-carousel");

    if (!carousel) return;

    const slides = [...carousel.querySelectorAll(".carousel-slide")];
    const previous = carousel.querySelector(".carousel-prev");
    const next = carousel.querySelector(".carousel-next");
    const counter = carousel.querySelector(".carousel-counter");

    let currentIndex = 0;

    function showSlide(index) {
        currentIndex = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
            const active = i === currentIndex;
            slide.hidden = !active;
        });

        counter.textContent = `${currentIndex + 1} / ${slides.length}`;
    }

    previous.addEventListener("click", () => {
        showSlide(currentIndex - 1);
    });

    next.addEventListener("click", () => {
        showSlide(currentIndex + 1);
    });

    showSlide(0);
});
