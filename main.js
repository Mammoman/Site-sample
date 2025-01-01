const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

const updateSliderPosition = () => {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
};

const showNextSlide = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSliderPosition();
};

const showPrevSlide = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSliderPosition();
};

nextBtn.addEventListener('click', showNextSlide);
prevBtn.addEventListener('click', showPrevSlide);

