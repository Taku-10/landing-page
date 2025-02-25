const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

/**
 * This function sets up a slideshow effect for the given slides.
 * It removes the "active" class from the current slide and adds it to the next slide.
 * The function is called every 5 seconds
 */
setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 5000);

const scrollToTopButton = document.querySelector(".scroll-to-top");

/**
 * Adds an event listener to the window object to handle scroll events.
 * When the user scrolls, it checks if the vertical scroll position is greater than 300 pixels.
 * If it is, it adds the "show" class to the scroll-to-top button.
 * If it is not, it removes the "show" class from the scroll-to-top button.
 */
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
});

/**
 * Handles the click event on the scroll-to-top button.
 * When the user clicks the button, it scrolls the window to the top of the document.
 */
scrollToTopButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
