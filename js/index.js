const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const buttonPrev = document.querySelector(".button-prev");
const buttonNext = document.querySelector(".button-next");
const SLIDES_AMOUNT = slides.length

let current = 0;
let prev = SLIDES_AMOUNT;
let next = 1;

buttonPrev.addEventListener("click", () => showPrevSlide());
buttonNext.addEventListener("click", () => showNextSlide());

const showPrevSlide = () =>
  current > 0 ? gotoNum(current - 1) : gotoNum(SLIDES_AMOUNT - 1);

const showNextSlide = () => (current < (SLIDES_AMOUNT - 1) ? gotoNum(current + 1) : gotoNum(0));

const gotoNum = (number) => {
  current = number;
  prev = current - 1;
  next = current + 1;

  for (let i = 0; i < SLIDES_AMOUNT; i++) {
    slides[i].classList.remove("active");
    slides[i].classList.remove("prev");
    slides[i].classList.remove("next");
  }

  if (next === SLIDES_AMOUNT) {
    next = 0;
  }

  if (prev === -1) {
    prev = SLIDES_AMOUNT - 1;
  }

  slides[current].classList.add("active");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");
};
