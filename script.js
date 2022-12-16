// ---------------------------------
// Section Companies Carousel
// ---------------------------------

const slider = document.querySelector(".section-companies__cards");
const cards = document.querySelectorAll(".section-companies__card");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

const cardWidth = cards[0].clientWidth + 26;

let counter = 1;

cards[0].style.opacity = "0";
cards[6].style.opacity = "0";

slider.style.transform = `translateX(${-cardWidth}px)`;

const sliderLength =
  document.querySelectorAll(".section-companies__card").length - 2;

btnRight.addEventListener("click", () => {
  if (counter >= sliderLength + 1) return;
  slider.style.transition = "all 0.5s ease";
  counter++;
  slider.style.transform = `translateX(${-counter * cardWidth}px)`;
  cards[6].style.opacity = "0";
});

btnLeft.addEventListener("click", () => {
  if (counter <= 0) return;
  slider.style.transition = "all 0.5s ease";
  counter--;
  slider.style.transform = `translateX(${-counter * cardWidth}px)`;
  cards[0].style.opacity = "0";
});

slider.addEventListener("transitionend", () => {
  if (counter <= 0) {
    slider.style.transform = `translateX(${-sliderLength * cardWidth}px)`;
    slider.style.transition = "none";
    counter = sliderLength;
    cards[6].style.opacity = "1";
  }

  if (counter >= sliderLength + 1) {
    counter = 1;
    slider.style.transform = `translateX(${-counter * cardWidth}px)`;
    slider.style.transition = "none";
    cards[0].style.opacity = "1";
  }
});

// ---------------------------------
// Section Testimonials Carousel
// ---------------------------------
const btnLeftT = document.querySelector(".section-testimonials__btn-left");
const btnRightT = document.querySelector(".section-testimonials__btn-right");

// Description
const description = document.querySelectorAll(
  ".section-testimonials__description"
);

for (let i = 1; i < description.length; i++) {
  description[i].style.opacity = "0";
  description[i].classList.add("addAbs");
}

// Jobs
const job = document.querySelectorAll(".section-testimonials__job");

for (let i = 1; i < job.length; i++) {
  job[i].style.opacity = "0";
  job[i].classList.add("addAbs");
}

// Images
const img = document.querySelectorAll(".section-testimonials__img");

for (let i = 1; i < img.length; i++) {
  img[i].style.opacity = "0";
  img[i].classList.add("addAbs");
}

let counterT = 0;

btnLeftT.addEventListener("click", () => {
  for (let i = 0; i < description.length; i++) {
    description[i].style.transition = "all 0.3s";
    description[i].style.opacity = "0";
  }

  for (let i = 0; i < job.length; i++) {
    job[i].style.transition = "all 0.3s";
    job[i].style.opacity = "0";
  }

  for (let i = 0; i < img.length; i++) {
    img[i].style.transition = "all 0.3s";
    img[i].style.opacity = "0";
  }

  counterT--;
  if (counterT >= 0) {
    description[counterT].style.opacity = "1";
  } else {
    counterT = description.length - 1;
    description[counterT].style.opacity = "1";
  }

  if (counterT >= 0) {
    job[counterT].style.opacity = "1";
  } else {
    counterT = job.length - 1;
    job[counterT].style.opacity = "1";
  }

  if (counterT >= 0) {
    img[counterT].style.opacity = "1";
  } else {
    counterT = img.length - 1;
    img[counterT].style.opacity = "1";
  }
});

btnRightT.addEventListener("click", () => {
  for (let i = 0; i < description.length; i++) {
    description[i].style.transition = "all 0.3s";
    description[i].style.opacity = "0";
  }

  for (let i = 0; i < job.length; i++) {
    job[i].style.transition = "all 0.3s";
    job[i].style.opacity = "0";
  }

  for (let i = 0; i < img.length; i++) {
    img[i].style.transition = "all 0.3s";
    img[i].style.opacity = "0";
  }

  counterT++;
  if (counterT < description.length) {
    description[counterT].style.opacity = "1";
  } else {
    counterT = 0;
    description[counterT].style.opacity = "1";
  }

  if (counterT < description.length) {
    job[counterT].style.opacity = "1";
  } else {
    counterT = 0;
    job[counterT].style.opacity = "1";
  }

  if (counterT < description.length) {
    img[counterT].style.opacity = "1";
  } else {
    counterT = 0;
    img[counterT].style.opacity = "1";
  }
});

// ---------------------------------
// Section Blog Carousel
// ---------------------------------

const sliderB = document.querySelector(".section-blog__cards");
const cardsB = document.querySelectorAll(".section-blog__card");
const btnLeftB = document.querySelector(".section-blog__btn-left");
const btnRightB = document.querySelector(".section-blog__btn-right");

const cardWidthB = cardsB[0].clientWidth + 26;

let counterB = 1;

cardsB[0].style.opacity = "0";
cardsB[6].style.opacity = "0";

sliderB.style.transform = `translateX(${-cardWidthB}px)`;

const sliderLengthB =
  document.querySelectorAll(".section-blog__card").length - 2;

btnRightB.addEventListener("click", () => {
  if (counterB >= sliderLengthB + 1) return;
  sliderB.style.transition = "all 0.5s ease";
  counterB++;
  sliderB.style.transform = `translateX(${-counterB * cardWidthB}px)`;
  cardsB[6].style.opacity = "0";
});

btnLeftB.addEventListener("click", () => {
  if (counterB <= 0) return;
  sliderB.style.transition = "all 0.5s ease";
  counterB--;
  sliderB.style.transform = `translateX(${-counterB * cardWidthB}px)`;
  cardsB[0].style.opacity = "0";
});

sliderB.addEventListener("transitionend", () => {
  if (counterB <= 0) {
    sliderB.style.transform = `translateX(${-sliderLengthB * cardWidthB}px)`;
    sliderB.style.transition = "none";
    counterB = sliderLengthB;
    cardsB[6].style.opacity = "1";
  }

  if (counterB >= sliderLengthB + 1) {
    counterB = 1;
    sliderB.style.transform = `translateX(${-counterB * cardWidthB}px)`;
    sliderB.style.transition = "none";
    cardsB[0].style.opacity = "1";
  }
});

// ---------------------------------
//            Navigation
// ---------------------------------
const navBtn = document.querySelector(".header__burger-btn-container");
const navBtnBar = document.querySelector(".header__burger-bar");
const nav = document.querySelector(".nav");

let isHidden = true;
navBtn.addEventListener("click", () => {
  nav.style.transition = "all 0.4s ease";
  if (isHidden) {
    nav.classList.remove("hidden");
    navBtn.style.background = "#443fde";
    navBtnBar.style.background = "#fff";
    isHidden = false;
  } else {
    navBtn.style.background = "#fff";
    navBtnBar.style.background = "#030407";
    nav.classList.add("hidden");
    isHidden = true;
  }
});
