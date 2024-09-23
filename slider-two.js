(function () {
  let currentIndex = 0;
  const items = document.querySelectorAll(".carousel-item-two");
  const itemsToShow = 4; // Nombre d'images à afficher à la fois
  const totalItems = items.length;
  const totalSlides = totalItems - itemsToShow; // Nombre total de déplacements possibles
  let direction = 1; // 1 pour avancer, -1 pour reculer

  function updateCarousel() {
    const offset = -currentIndex * (100 / itemsToShow); // Calcule le décalage en pourcentage
    document.querySelector(
      ".carousel-two"
    ).style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    // Avancer
    if (direction === 1) {
      if (currentIndex >= totalSlides) {
        direction = -1; // Changer de direction lorsque la fin est atteinte
        currentIndex -= 1; // Réduire l'index pour commencer à revenir
      } else {
        currentIndex += 1; // Passer à l'image suivante
      }
    } else {
      // Reculer
      if (currentIndex <= 0) {
        direction = 1; // Changer de direction lorsque le début est atteint
        currentIndex += 1; // Augmenter l'index pour recommencer à avancer
      } else {
        currentIndex -= 1; // Passer à l'image précédente
      }
    }
    updateCarousel();
  }

  // Auto-défilement toutes les 3 secondes
  setInterval(nextSlide, 5000);

  // Initialisation de l'affichage
  updateCarousel();
})();
