import { mockData } from "./mock_Data.js";

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    // Simulate a delay (e.g., 2500ms)
    displayGames(mockData); // Pass the mockData to displayGames
  }, 500); // Simulate the 2500ms delay
});

function displayGames(games) {
  const gameList = document.getElementById("game-list");
  gameList.innerHTML = ""; // Clear previous content

  if (games.results && Array.isArray(games.results)) {
    // Separate games into categories
    const featuredGames = games.results.filter((game) => game.featured); // Assuming 'featured' is a boolean attribute
    const highestRatedGames = [...games.results]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4); // Top 5 rated games
    const newestReleases = [...games.results]
      .sort((a, b) => new Date(b.released) - new Date(a.released))
      .slice(0, 4); // Top 5 newest games

    // Display featured games section
    if (featuredGames.length > 0) {
      createGameSection("Featured Games", featuredGames);
    }

    // Display highest rated games section
    if (highestRatedGames.length > 0) {
      createGameSection("Highest Rated Games", highestRatedGames);
    }

    // Display newest releases section
    if (newestReleases.length > 0) {
      createGameSection("Newest Releases", newestReleases);
    }
  } else {
    gameList.innerHTML = "No games to display.";
  }
}

// Create game section with title and game cards
function createGameSection(title, games) {
  const gameList = document.getElementById("game-list");

  const section = document.createElement("div");
  section.classList.add("game-section");

  // Title for the section
  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = title;
  section.classList.add("section-title"); // Add a class for the title styling
  section.appendChild(sectionTitle);

  // Display each game in the section
  games.forEach((game) => {
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

    section.appendChild(card);
  });

  gameList.appendChild(section);
}
