document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById("gridContainer");
    const scoreValue = document.getElementById("scoreValue");
  
    const cards = ["🐱", "🐶", "🐭", "🐰", "🐻", "🦁", "🐸", "🐵"];
    let openedCards = [];
    let matchedCards = [];
    let score = 0;
  
    // Duplicar las cartas para tener parejas
    const duplicatedCards = cards.concat(cards);
  
    // Función para mezclar el array de cartas
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    // Función para crear las cartas y mostrarlas en la cuadrícula
    function createCards() {
      shuffle(duplicatedCards);
      duplicatedCards.forEach((card, index) => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.dataset.index = index;
        div.innerHTML = `
          <div class="back"></div>
          <div class="front">${card}</div>
        `;
        div.addEventListener("click", handleCardClick);
        gridContainer.appendChild(div);
      });
    }
  
    // Función para manejar el clic en una carta
    function handleCardClick(event) {
      const clickedCard = event.target.closest(".card");
      const index = clickedCard.dataset.index;
  
      // Evitar clics en cartas ya emparejadas o abiertas
      if (matchedCards.includes(index) || openedCards.length === 2) return;
  
      // Mostrar la carta
      clickedCard.querySelector(".front").style.display = "block";
  
      // Añadir la carta al array de cartas abiertas
      openedCards.push(clickedCard);
  
      // Si hay dos cartas abiertas, comprobar si son iguales
      if (openedCards.length === 2) {
        const card1Index = openedCards[0].dataset.index;
        const card2Index = openedCards[1].dataset.index;
  
        if (duplicatedCards[card1Index] === duplicatedCards[card2Index]) {
          // Las cartas son iguales
          matchedCards.push(card1Index, card2Index);
          score += 10;
          scoreValue.textContent = score;
          openedCards = [];
  
          // Comprobar si todas las cartas están emparejadas
          if (matchedCards.length === duplicatedCards.length) {
            setTimeout(() => {
              alert("¡Felicidades! Has ganado el juego.");
            }, 500);
          }
        } else {
          // Las cartas no son iguales, volver a ponerlas boca abajo
          setTimeout(() => {
            openedCards.forEach(card => {
              card.querySelector(".front").style.display = "none";
            });
            openedCards = [];
          }, 1000);
        }
      }
    }
  
    // Iniciar el juego
    createCards();
  });
  