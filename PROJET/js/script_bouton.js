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
  
  