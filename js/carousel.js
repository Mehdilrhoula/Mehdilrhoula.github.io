
/* ATTEND LE CHARGEMENT */
document.addEventListener("DOMContentLoaded", () => {

    /* RECUPERE LE CARROUSEL */
    const carousel = document.querySelector("#pyjobs-carousel");

    /* VERIFIE SA PRESENCE */
    if (!carousel) return;

    /* RECUPERE LES ELEMENTS */
    const slides = [...carousel.querySelectorAll(".carousel-slide")];
    const previous = carousel.querySelector(".carousel-prev");
    const next = carousel.querySelector(".carousel-next");
    const counter = carousel.querySelector(".carousel-counter");

    /* INITIALISE LA POSITION */
    let currentIndex = 0;

    /* AFFICHE UNE DIAPOSITIVE */
    function showSlide(index) {

        /* CALCULE LA POSITION */
        currentIndex = (index + slides.length) % slides.length;

        /* AFFICHE LA BONNE IMAGE */
        slides.forEach((slide, i) => {
            const active = i === currentIndex;
            slide.hidden = !active;
        });

        /* ACTUALISE LE COMPTEUR */
        counter.textContent = `${currentIndex + 1} / ${slides.length}`;
    }

    /* GERE LE BOUTON PRECEDENT */
    previous.addEventListener("click", () => {
        showSlide(currentIndex - 1);
    });

    /* GERE LE BOUTON SUIVANT */
    next.addEventListener("click", () => {
        showSlide(currentIndex + 1);
    });

    /* AFFICHE LA PREMIERE IMAGE */
    showSlide(0);
});
