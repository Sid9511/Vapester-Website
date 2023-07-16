// Add this JavaScript code to your "js/script.js" file or create a new JS file

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
  
    let currentIndex = 0;
    let slideInterval;
  
    // Function to show the next slide
    function showNextSlide() {
      slides[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add("active");
    }
  
    // Start the automatic slider
    function startSlider() {
      slideInterval = setInterval(showNextSlide, 5000); // Change slide every 5 seconds (5000 milliseconds)
    }
  
    // Stop the automatic slider
    function stopSlider() {
      clearInterval(slideInterval);
    }
  
    startSlider();
  
    // Pause the slider when the user hovers over it
    slider.addEventListener("mouseenter", stopSlider);
    
    // Resume the slider when the user moves the mouse away
    slider.addEventListener("mouseleave", startSlider);
  });
  