/** Premier slide **/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
                

/**Deuxième slide**/


var slideIndex2 = 1;
showSlidese(slideIndex2);

function plusSlides2(n) {
  showSlidese((slideIndex2 += n));
}

function currentSlide2(n) {
  showSlidese((slideIndex2 = n));
}

function showSlidese(n) {
  var i;
  var slides = document.getElementsByClassName("Slides2");
  var dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " active";
}

/** Troisième slide **/
var slideIndex3 = 1;
showSlideseE(slideIndex3);

function plusSlides3(n) {
  showSlideseE((slideIndex3 += n));
}

function currentSlide3(n) {
  showSlideseE((slideIndex3 = n));
}

function showSlideseE(n) {
  var i;
  var slides = document.getElementsByClassName("Slides3");
  var dots = document.getElementsByClassName("dot3");
  if (n > slides.length) {
    slideIndex3 = 1;
  }
  if (n < 1) {
    slideIndex3 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex3 - 1].style.display = "block";
  dots[slideIndex3 - 1].className += " active";
}
// Affichage bouton
window.addEventListener("scroll", function () {
  const bouton = document.getElementById("BoutonRetourID");
  const bas = document.documentElement.scrollTop;
  if (bas > 20) {
    bouton.style.display = "flex";
  } else {
    bouton.style.display = "none";
  }
});
// Bouton remonte
document.getElementById("BoutonRetourID").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



