const slides = document.querySelectorAll('.slide');
const slideCounter = document.querySelector('.slide-counter');
const slideDescription = document.querySelector('.slide-description');
const dots = document.querySelectorAll('.dot');
const previewImage = document.querySelector('.preview-slide');

const slideData = [
  { src: '/assets/img/slider.png', title: 'Унікальні Сидіння N-Sport', description: 'Унікальна структура та неймовірна зручність' },
  { src: '/assets/img/slider.jpg', title: 'Новий Екстер’єр', description: 'Стильний та аеродинамічний дизайн' },
  { src: '/assets/img/slider.png', title: 'Передові Технології', description: 'Інновації для вашого комфорту' },
  { src: '/assets/img/slider.jpg', title: 'Екологічні Матеріали', description: 'Вибір для майбутнього' },
  { src: '/assets/img/slider.png', title: 'Безпека', description: 'Захист кожного пасажира' }
];

let currentSlide = 0;
let autoScrollInterval;

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'block' : 'none';
  });

  const nextSlide = (currentSlide + 1) % slides.length;
  previewImage.src = slideData[nextSlide].src;
  slideCounter.textContent = `${currentSlide + 1}/5 — ${slideData[currentSlide].title}`;
  slideDescription.textContent = slideData[currentSlide].description;

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  }, 3000);
}

document.querySelector('.next').addEventListener('click', () => {
  clearInterval(autoScrollInterval);
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
  startAutoScroll();
});

document.querySelector('.prev').addEventListener('click', () => {
  clearInterval(autoScrollInterval);
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
  startAutoScroll();
});

let startX = 0;
let isTouchMove = false;

document.querySelector('.slider-img').addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isTouchMove = true;
});

document.querySelector('.slider-img').addEventListener('touchmove', (e) => {
  if (isTouchMove) {
    const endX = e.touches[0].clientX;
    if (startX > endX + 50) {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlider();
      isTouchMove = false;
    } else if (startX < endX - 50) {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlider();
      isTouchMove = false;
    }
  }
});

document.querySelector('.slider-img').addEventListener('touchend', () => {
  isTouchMove = false;
});

updateSlider();
startAutoScroll();
