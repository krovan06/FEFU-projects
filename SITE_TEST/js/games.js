const button = document.getElementsByClassName('dropdown')[0];
const dropdownContent = document.getElementsByClassName('dropdown-content')[0];

button.addEventListener('click', function() {
  dropdownContent.classList.toggle('show');
});

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.right-arrow');
const prevBtn = document.querySelector('.left-arrow');
let currentSlide = 0;

// Функция для отображения слайда
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - index) * 100}%)`;
    console.log(`Slide ${i + 1} position: ${(i - index) * 100}%`);
  });
}

// Функция для обработки следующего слайда
nextBtn.addEventListener('click', function() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// Функция для обработки предыдущего слайда
prevBtn.addEventListener('click', function() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// Показываем первый слайд при загрузке
showSlide(currentSlide);