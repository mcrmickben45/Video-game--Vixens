document.addEventListener("DOMContentLoaded", function () {

/* Assigns JS variables for games and new games modal */ 
const openGamesBtn = document.getElementById("openGamesBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("gamesModal");
const gamesList = document.getElementById("gamesList");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const favoriteButtons = document.querySelectorAll(".favoriteBtn"); 
const favoriteGamesList = document.getElementById("favoriteGamesList"); 

const apiKey = "780187723c4d434eaa43adc592fca0c9"; /* API key from RAWG API */
const baseUrl = `https://api.rawg.io/api/games?key=780187723c4d434eaa43adc592fca0c9&`;

let page = 1;

/* Function adds a game to favorites */
function addToFavorites(gameName) {
const favoriteGames = JSON.parse(localStorage.getItem('favoriteGames')) || [];

    if (!favoriteGames.includes(gameName)) {
        favoriteGames.push(gameName);
        localStorage.setItem('favoriteGames', JSON.stringify(favoriteGames));
        updateFavoritesList();
    }
}

/* Function to remove a game from favorites */
function removeFromFavorites(gameName) {
    const favoriteGames = JSON.parse(localStorage.getItem('favoriteGames')) || [];

    const gameIndex = favoriteGames.indexOf(gameName);
    if (gameIndex !== -1) {
        favoriteGames.splice(gameIndex, 1);
        localStorage.setItem('favoriteGames', JSON.stringify(favoriteGames));
        updateFavoritesList();
    }
}

/* Function to update the list of favorite games on the page */
function updateFavoritesList() {
    const favoriteGames = JSON.parse(localStorage.getItem('favoriteGames')) || [];
    favoriteGamesList.innerHTML = ''; /* Clears current list */

    if (favoriteGames.length > 0) {
        const favoritesHeader = document.createElement('h2');
        favoritesHeader.textContent = 'Favorited Games';
        favoriteGamesList.appendChild(favoritesHeader);
    }

    favoriteGames.forEach((game) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${game}</span>
            <button class="removeFavoriteBtn">Remove</button>
        `;
        favoriteGamesList.appendChild(listItem);
     });
}

/* Fetches games from RAWG.io API */
function fetchGames() {
const currentYear = new Date().getFullYear();
const url = `${baseUrl}dates=${currentYear}-01-01,${currentYear}-12-31&page=${page}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const games = data.results;
            games.forEach((game) => {
                const gameElement = document.createElement("div");
                /* Defines element media by inner html ids */
                gameElement.innerHTML = `
                    <h3>${game.name}</h3>
                    <img src="${game.background_image}" alt="${game.name}" style="width: 400px; height: 350px;">
                    <p>Platforms: ${game.platforms.map((platform) => platform.platform.name).join(", ")}</p>
                    <button class="favoriteBtn">Favorite</button>
                `;
                gamesList.appendChild(gameElement);
            });

            /* Adds click event listeners to the newly created favorite buttons */
            const newFavoriteButtons = gamesList.querySelectorAll(".favoriteBtn");
            newFavoriteButtons.forEach((button) => {
                button.addEventListener("click", (event) => {
                    const buttonText = event.target.innerText;
                    event.target.innerText = buttonText === "Favorite" ? "Unfavorite" : "Favorite";
                    const gameName = event.target.parentElement.querySelector("h3").innerText;
                    if (buttonText === "Favorite") {
                        addToFavorites(gameName);
                    } else {
                        removeFromFavorites(gameName);
                    }
                });
            });
        })
        .catch((error) => console.error(error));
}

/* Adds event listeners for calling and closing new games button/model */
openGamesBtn.addEventListener("click", () => {
    modal.style.display = "block";
    fetchGames();
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
    gamesList.innerHTML = ""; 
    page = 1; 
});

loadMoreBtn.addEventListener("click", () => {
    page++;
    fetchGames();
});

/* Add click event listeners to remove favorite buttons */
favoriteGamesList.addEventListener("click", (event) => {
    if (event.target.classList.contains("removeFavoriteBtn")) {
        const gameName = event.target.parentElement.querySelector("span").innerText;
        removeFromFavorites(gameName);
    }
});

/* Initial update of the favorites list when the page loads */
updateFavoritesList();
});

