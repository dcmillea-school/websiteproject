import { mockData } from "./mock_Data.js";

document.addEventListener("DOMContentLoaded", () => {
  // Replace this with your desired YouTube Video ID
  const videoId = "cohzIkKds4A";

  // Create iframe element
  const iframe = document.createElement("iframe");
  iframe.width = "1280";
  iframe.height = "420";
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
  iframe.title = "YouTube video player";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  iframe.frameBorder = 0;
  // Add iframe to the container
  document.getElementById("video-container").appendChild(iframe);
  setTimeout(() => {
    // Simulate a delay (e.g., 2500ms)
    displayGames(mockData); // Pass the mockData to displayGames
  }, 500); // Simulate the 2500ms delay
});

function displayGames(games) {
  const gameList = document.getElementById("game-list");
  gameList.innerHTML = ""; // Clear previous content

  if (games.results && Array.isArray(games.results)) {
    const featuredGames = games.results.filter((game) => game.isFeatured);
    const classicGames = games.results.filter((game) => game.isClassic);
    const highestRatedGames = [...games.results]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4);
    const lowestRatedGames = [...games.results]
      .sort((a, b) => a.rating - b.rating)
      .slice(0, 4);
    const newestReleases = [...games.results]
      .sort((a, b) => new Date(b.released) - new Date(a.released))
      .slice(0, 4);

    if (featuredGames.length > 0) {
      createGameSection("🌟 Featured Games", featuredGames);
    }

    if (highestRatedGames.length > 0) {
      createGameSection("🔥 Highest Rated", highestRatedGames);
    }

    if (lowestRatedGames.length > 0) {
      createGameSection("🧊 Lowest Rated", lowestRatedGames);
    }

    if (newestReleases.length > 0) {
      createGameSection("🆕 Newest Releases", newestReleases);
    }

    if (classicGames.length > 0) {
      createGameSection("🎮 Absolute Classics", classicGames);
    }
  } else {
    gameList.innerHTML = "<p>No games to display.</p>";
  }
}

function createGameSection(title, games) {
  const gameList = document.getElementById("game-list");

  const section = document.createElement("div");
  section.classList.add("game-section");

  // Header
  const sectionHeader = document.createElement("div");
  sectionHeader.classList.add("section-header");

  const sectionTitle = document.createElement("h2");
  sectionTitle.classList.add("section-title");
  sectionTitle.innerText = title;

  sectionHeader.appendChild(sectionTitle);
  section.appendChild(sectionHeader);

  // Body (cards)
  const sectionBody = document.createElement("div");
  sectionBody.classList.add("game-grid"); // game-grid handles the layout

  games.forEach((game) => {
    const card = document.createElement("div");
    card.classList.add("game-card");

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

    sectionBody.appendChild(card);
  });

  section.appendChild(sectionBody);
  gameList.appendChild(section);
}
