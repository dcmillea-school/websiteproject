import { mockData } from "./mock_Data.js";

document.addEventListener("DOMContentLoaded", () => {
  displayLoading(true); // Show loading spinner initially
  setTimeout(() => {
    // Simulate a delay (e.g., 2500ms)
    displayGames(mockData); // Pass the mockData to displayGames
    displayLoading(false); // Hide loading spinner after data is loaded
  }, 2500); // Simulate the 2500ms delay
});

function displayLoading(isLoading) {
  const loadingElement = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingElement.style.display = "flex"; // Show the loading spinner
  } else {
    loadingElement.style.display = "none"; // Hide the loading spinner
  }
}

function displayGames(games) {
  const gameList = document.getElementById("game-list");
  gameList.innerHTML = ""; // Clear previous content

  // Check if games.results exists and is an array
  if (games.results && Array.isArray(games.results)) {
    games.results.forEach((game) => {
      const card = document.createElement("div");
      card.classList.add("game-card");

      // Use backticks for template literals
      card.innerHTML = `
        <div class="image-wrapper">
            <img src="${game.background_image}" alt="${game.name}" />
        </div>
        <div class="game-title">${game.name}</div>
        <div class="game-details">
          <p><strong>Released:</strong> ${game.released}</p>
          <p><strong>Rating:</strong> ${game.rating}</p>
        </div>
      `;

      gameList.appendChild(card);
    });
  } else {
    gameList.innerHTML = "No games to display.";
  }
}
