const body = document.body;

const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const content = document.getElementById("content");

const slides = document.querySelectorAll(".slide");
let activeSlide = 0;

const updateSlider = () => {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === activeSlide));
};

slides.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    const content = slide.dataset.content;
    alert(content); // Display content as a pop-up message
  });
});

rightButton.addEventListener("click", () => {
  activeSlide = (activeSlide + 1) % slides.length;
  updateSlider();
});

leftButton.addEventListener("click", () => {
  activeSlide = (activeSlide - 1 + slides.length) % slides.length;
  updateSlider();
});

updateSlider();
