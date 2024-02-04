let currentSlide = 0;
const carousel = document.querySelector(".hero__carousel");
const totalSlides = document.querySelectorAll(".hero__carousel--item").length;
const slideWidth = document.querySelector(".hero__carousel--item").offsetWidth;

function changeSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  const transformValue =  -currentSlide * slideWidth + "px";
  carousel.style.transition = "transform 0.5s ease-in-out";
  carousel.style.transform = "translateX(" + transformValue + ")";
}
