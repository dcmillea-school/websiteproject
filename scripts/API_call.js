document.addEventListener("DOMContentLoaded", function () {
  // Mock API Data to simulate the API response
  const mockData = {
    results: [
      {
        name: "Call of Duty: Black Ops X",
        released: "2036-11-06",
        rating: 1.4,
        background_image: "../../media/game_covers/blackops_10.webp",
        isFeatured: false,
      },
      {
        name: "Grand Theft Auto VI",
        released: "2025-09-17", // speculative release date
        rating: 9.9,
        background_image: "../../media/game_covers/gta6.webp", // Make sure you add this image
        isFeatured: true,
      },
      {
        name: "Halo: Holy Combat",
        released: "1966-6-6", // speculative release date
        rating: 6.6,
        background_image: "../../media/game_covers/jesusHalo.jpg", // Make sure you add this image
        isFeatured: true,
      },
      {
        name: "Halo 2",
        released: "2004-11-09",
        rating: 9.3,
        background_image: "../../media/game_covers/halo2.jpeg",
        isFeatured: false,
      },
      {
        name: "Rocket League",
        released: "2015-07-07",
        rating: 8.5,
        background_image: "../../media/game_covers/rocket_league.jpeg",
        isFeatured: true,
      },
      {
        name: "Tongue of the Fatman",
        released: "2029-08-02",
        rating: 10,
        background_image: "../../media/game_covers/tongue.jpg",
        isFeatured: false,
      },
      {
        name: "Outlast",
        released: "2013-09-04",
        rating: 8.1,
        background_image: "../../media/game_covers/outlast01.jpg",
        isFeatured: true,
      },
      {
        name: "Call of Duty: Black Ops III",
        released: "2015-11-06",
        rating: 9.7,
        background_image: "../../media/game_covers/Black_Ops_3.jpg",
        isFeatured: false,
      },
      {
        name: "Halo 3",
        released: "2007-09-25",
        rating: 9.1,
        background_image: "../../media/game_covers/halo_3.webp",
        isFeatured: true,
      },
      {
        name: "Outlast 2",
        released: "2017-04-25",
        rating: 8.3,
        background_image: "../../media/game_covers/outlast02.jpeg",
        isFeatured: false,
      },
      {
        name: "Among Us",
        released: "2018-06-15",
        rating: 8.0,
        background_image: "../../media/game_covers/Among_Us_cover_art.jpg",
        isFeatured: true,
      },
      {
        name: "Subnautica",
        released: "2018-01-23",
        rating: 7.9,
        background_image: "../../media/game_covers/subnat.avif",
        isFeatured: true,
      },
      {
        name: "Undertale",
        released: "2015-09-15",
        rating: 9.0,
        background_image: "../../media/game_covers/undertale.png",
        isFeatured: false,
      },
      {
        name: "Phasmophobia",
        released: "2020-09-18",
        rating: 7.8,
        background_image: "../../media/game_covers/phas.jpg",
        isFeatured: false,
      },
      {
        name: "Dead by Daylight",
        released: "2016-06-14",
        rating: 7.6,
        background_image: "../../media/game_covers/deadby.jpeg",
        isFeatured: false,
      },
      {
        name: "Risk of Rain 2",
        released: "2020-08-11",
        rating: 8.5,
        background_image: "../../media/game_covers/Risk_of_Rain_2.jpg",
        isFeatured: true,
      },
      {
        name: "Where Am I?",
        released: "2023-06-08",
        rating: 10,
        background_image: "../../media/game_covers/bidenW.png",
        isFeatured: true,
      },
      {
        name: "Portal 2",
        released: "2011-04-19",
        rating: 9.2,
        background_image: "../../media/game_covers/portal2.jpg",
        isFeatured: false,
      },
      {
        name: "Hollow Knight",
        released: "2017-02-24",
        rating: 8.0,
        background_image: "../../media/game_covers/hollow_knight.jpeg",
        isFeatured: false,
      },
      {
        name: "Minecraft",
        released: "2011-11-18",
        rating: 9.1,
        background_image: "../../media/game_covers/minecraft.jpeg",
        isFeatured: true,
      },
      {
        name: "Assassins Creed: Black Flag",
        released: "2013-13-29",
        rating: 8.2,
        background_image: "../../media/game_covers/assblack.jpg",
        isFeatured: true,
      },
      {
        name: "Cuphead",
        released: "2017-09-29",
        rating: 8.3,
        background_image: "../../media/game_covers/cuphead.png",
        isFeatured: false,
      },
      {
        name: "Left 4 Dead 2",
        released: "2009-11-17",
        rating: 8.3,
        background_image: "../../media/game_covers/left4dead2.jpg",
        isFeatured: false,
      },
      {
        name: "Assassins Creed 3",
        released: "2012-12-30",
        rating: 8.7,
        background_image: "../../media/game_covers/ass3.jpg",
        isFeatured: false,
      },
      {
        name: "The Hunt for the Golden Tablets",
        released: "Like 20 years ago",
        rating: 9.7,
        background_image: "../../media/game_covers/joesmith.png",
        isFeatured: true,
      },
      {
        name: "Sea of Thieves",
        released: "2018-03-20",
        rating: 8.2,
        background_image: "../../media/game_covers/seaoft.jpg",
        isFeatured: true,
      },
      {
        name: "Stardew Valley",
        released: "2016-02-26",
        rating: 7.5,
        background_image: "../../media/game_covers/stardew.jpeg",
        isFeatured: false,
      },
      {
        name: "Dark Souls III",
        released: "2016-03-24",
        rating: 9.2,
        background_image: "../../media/game_covers/dark3.webp",
        isFeatured: false,
      },
      {
        name: "Red Dead Redemption 2",
        released: "2018-10-26",
        rating: 9.2,
        background_image: "../../media/game_covers/reddead2.jpg",
        isFeatured: true,
      },
    ],
  };

  function fetchGamesWithDelay() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, 2500); // Simulating a delay of 2500ms
    });
  }

  // Initiate the mock API call and display the games
  fetchGamesWithDelay()
    .then((data) => {
      displayGames(data); // Call function to display games after delay
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
