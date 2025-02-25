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

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    // Show arrow after scrolling 300px down
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
});

scrollToTopButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Mode Toggle functionality
const modeToggle = document.getElementById("mode-toggle");

/**
 * Toggles between light and dark modes by adding or removing the "light-mode" class from the body element.
 * Updates the mode toggle button icon based on the current mode.
 */
modeToggle.addEventListener("click", (e) => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
});
