let index = 0;

const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

document.querySelector(".btn-next").addEventListener("click", () => {
    index++;
    if (index >= totalSlides) index = 0;
    updateSlidePosition();
});

document.querySelector(".btn-prev").addEventListener("click", () => {
    index--;
    if (index < 0) index = totalSlides - 1;
    updateSlidePosition();
});

function updateSlidePosition() {
    const slideWidth = slides[0].clientWidth;
    const newLeft = -(slideWidth * index);
    document.querySelector(".slides").style.transform = `translateX(${newLeft}px)`;
}
