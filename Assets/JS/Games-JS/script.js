document.addEventListener("DOMContentLoaded", function () {
const openGamesBtn = document.getElementById("openGamesBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("gamesModal");
const gamesList = document.getElementById("gamesList");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const favoriteButtons = document.querySelectorAll(".favoriteBtn"); // favorite buttons
  
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
                      <img src="${game.background_image}" alt="${game.name}" style="width: 400px; height: 350px;">
                      <p>Platforms: ${game.platforms.map((platform) => platform.platform.name).join(", ")}</p>
                      <button class="favoriteBtn">Favorite</button>
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

//   Added favorites function button
  favoriteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const buttonText = event.target.innerText;
        event.target.innerText = buttonText === "Favorite" ? "Unfavorite" : "Favorite";
    });
  })
});