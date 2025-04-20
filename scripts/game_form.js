const genreSelect = document.getElementById("genre");
const platformSelect = document.getElementById("platform");

const gameCovers = {
  horror: [
    "../../media/mock_game_covers/horror_01.png", // Replace with actual image paths
    "../../media/mock_game_covers/horror_02.png",
    "../../media/mock_game_covers/horror_03.png",
  ],
  adventure: [
    "../../media/mock_game_covers/aa_01.png",
    "../../media/mock_game_covers/aa_02.png",
    "../../media/mock_game_covers/aa_03.png",
  ],
  rpg: [
    "../../media/mock_game_covers/rpg_01.png",
    "../../media/mock_game_covers/rpg_02.png",
    "../../media/mock_game_covers/rpg_03.png",
  ],
  strategy: [
    "../../media/mock_game_covers/strategy_01.png",
    "../../media/mock_game_covers/strategy_02.png",
    "../../media/mock_game_covers/strategy_03.png",
  ],
};

// Function to update the table and the game cover
function updateMetrics(event) {
  event.preventDefault(); // Prevent the form from submitting

  const genre = genreSelect.value;
  const platform = platformSelect.value;

  let developmentCost = 0;
  let revenuePotential = 0;
  let platformFee = 0;

  // Set values based on genre selection
  switch (genre) {
    case "horror":
      developmentCost = 300000;
      revenuePotential = 2000000;
      break;
    case "adventure":
      developmentCost = 500000;
      revenuePotential = 4000000;
      break;
    case "rpg":
      developmentCost = 1000000;
      revenuePotential = 7000000;
      break;
    case "strategy":
      developmentCost = 800000;
      revenuePotential = 6000000;
      break;
  }

  // Set values based on platform selection
  switch (platform) {
    case "xbox":
      platformFee = 1000000;
      break;
    case "playstation":
      platformFee = 1500000;
      break;
    case "pc":
      platformFee = 500000;
      break;
    case "switch":
      platformFee = 1200000;
      break;
  }

  // Update table with the calculated metrics
  document.getElementById(
    "development-cost"
  ).textContent = `$${developmentCost.toLocaleString()}`;
  document.getElementById(
    "revenue-potential"
  ).textContent = `$${revenuePotential.toLocaleString()}`;
  document.getElementById(
    "platform-fee"
  ).textContent = `$${platformFee.toLocaleString()}`;

  // Randomly pick a cover image for the selected genre
  console.log("Selected genre:", genre);
  const selectedCoverImages = gameCovers[genre];
  console.log("Selected genre:", genre);
  const randomCoverImage =
    selectedCoverImages[Math.floor(Math.random() * selectedCoverImages.length)];
  // Set the game cover image and title
  document.getElementById("cover-image").src = randomCoverImage;
  document.getElementById("game-title").textContent =
    document.getElementById("title").value || "Untitled Game";
}

// Add event listener for form submission to trigger the update
document.getElementById("game-form").addEventListener("submit", updateMetrics);

// Initialize the metrics and cover on page load
updateMetrics(new Event("submit")); // Trigger once to initialize everything
