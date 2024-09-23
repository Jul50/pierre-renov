(function () {
  let currentIndex = 0;
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;
  let direction = 1; // 1 pour avancer, -1 pour reculer

  function showSlide(index) {
    // Boucle le carrousel quand on dépasse la dernière image
    if (index >= totalItems) {
      currentIndex = 0; // Retourne à la première image
    } else if (index < 0) {
      currentIndex = totalItems - 1; // Va à la dernière image
    } else {
      currentIndex = index; // Met à jour l'index en cours
    }

    const offset = -currentIndex * 100;
    document.querySelector(
      ".carousel"
    ).style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    // Avancer
    if (direction === 1) {
      if (currentIndex >= totalItems - 1) {
        direction = -1; // Changer de direction lorsque la fin est atteinte
      } else {
        currentIndex++;
      }
    } else {
      // Reculer
      if (currentIndex <= 0) {
        direction = 1; // Changer de direction lorsque le début est atteint
      } else {
        currentIndex--;
      }
    }
    showSlide(currentIndex);
  }

  // Auto-défilement toutes les 5 secondes
  setInterval(nextSlide, 5000);

  // Initialisation de l'affichage
  showSlide(currentIndex);
})();
