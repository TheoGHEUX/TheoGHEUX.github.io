function initSlideshow(slideshowClass, dotsClass) {
  let slideIndex = 0;

  const slides = document.getElementsByClassName(slideshowClass);
  const dots = document.getElementsByClassName(dotsClass);

  function showSlides(n) {
    slideIndex = (n + slides.length) % slides.length; // Utilisation de modulo
    Array.from(slides).forEach((slide, i) => {
      slide.style.display = i === slideIndex ? "block" : "none";
    });
    Array.from(dots).forEach((dot, i) => {
      dot.className = dot.className.replace(" active", "");
      if (i === slideIndex) dot.className += " active";
    });
  }
  return {
    nextSlide: () => showSlides(slideIndex + 1),
    previousSlide: () => showSlides(slideIndex - 1),
    goToSlide: (n) => showSlides(n),
    init: () => showSlides(0), // Initialise le slideshow
  };
}

// Initialisation des trois slideshows
const slideshow1 = initSlideshow("Slides", "dot");
const slideshow2 = initSlideshow("Slides2", "dot2");
const slideshow3 = initSlideshow("Slides3", "dot3");

// Exemple d'utilisation
slideshow1.init();
document.getElementById("next1").onclick = slideshow1.nextSlide;
document.getElementById("prev1").onclick = slideshow1.previousSlide;

slideshow2.init();
document.getElementById("next2").onclick = slideshow2.nextSlide;
document.getElementById("prev2").onclick = slideshow2.previousSlide;

slideshow3.init();
document.getElementById("next3").onclick = slideshow3.nextSlide;
document.getElementById("prev3").onclick = slideshow3.previousSlide;
