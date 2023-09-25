document.addEventListener("DOMContentLoaded", function () {
  const openGamesBtn = document.getElementById("openGamesBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modal = document.getElementById("gamesModal");
  const gamesList = document.getElementById("gamesList");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  
  const apiKey = "780187723c4d434eaa43adc592fca0c9"; //  API key from RAWG API
  const baseUrl = `https://api.rawg.io/api/games?key=780187723c4d434eaa43adc592fca0c9&`;

  let page = 1;

  function fetchGames() {
      const currentYear = new Date().getFullYear();
      const url = `${baseUrl}dates=${currentYear}-01-01,${currentYear}-12-31&page=${page}`;

      fetch(url)
          .then((response) => response.json())
          .then((data) => {
              const games = data.results;
              games.forEach((game) => {
                  const gameElement = document.createElement("div");
                  gameElement.innerHTML = `
                      <h3>${game.name}</h3>
                      <img src="${game.background_image}" alt="${game.name}">
                      <p>Platforms: ${game.platforms.map((platform) => platform.platform.name).join(", ")}</p>
                  `;
                  gamesList.appendChild(gameElement);
              });
          })
          .catch((error) => console.error(error));
  }

  openGamesBtn.addEventListener("click", () => {
      modal.style.display = "block";
      fetchGames();
  });

  closeModalBtn.addEventListener("click", () => {
      modal.style.display = "none";
      gamesList.innerHTML = ""; // Clear the game list when closing the modal
      page = 1; // Reset the page number when closing the modal
  });

  loadMoreBtn.addEventListener("click", () => {
      page++;
      fetchGames();
  });
});




















// Get the modal
// const modal = document.getElementById("gamesModal");

// Get the button that opens the modal
// const btn = document.getElementById("openGamesBtn");

// Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];

// const gameList = document.querySelector("gamesList");
// const loadMoreBtn = document.getElementById("loadMoreBtn");
// let nextGamesList = null;

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//   fetchGamesData();
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


// const apiKey = "780187723c4d434eaa43adc592fca0c9"
// const apiUrl = "https://api.rawg.io/api/games?key=780187723c4d434eaa43adc592fca0c9&dates=2023-01-01,2023-12-31&ordering=-added";



// function fetchGamesData(url) {
//     fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       data.games.forEach((game) => {
//         const gameCard = document.createElement("div");
//         gameCard.classList.add("game-card");
//         gameCard.innerHTML = `
//                     <img src="${game.image}" alt="${game.title}" width="150">
//                     <h3>${game.title}</h3>
//                 `;
//                 gamesList.appendChild(gameCard);
//             });
//     })
//     .catch((error) => {
//       console.error('Error fetching data:', error);
//     });
//   }

  // load games 
  // loadMoreBtn.addEventListener("click", () => {
  //   if(nextGamesListfetchGamesData();
  // });