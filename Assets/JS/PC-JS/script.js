document.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".banner");
    var console1Button = document.getElementById("console1");
    console1Button.addEventListener("click", function () {
        banner.style.display = "none";
    });
});
var console1Button = document.getElementById("console1");

var gameListDiv = document.getElementById("gameList");

console1Button.addEventListener("click", function () {
var banner = document.querySelector(".banner");
banner.style.display = "none";
fetch("https://www.freetogame.com/api/games?platform=pc")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        gameListDiv.innerHTML = "";
        data.forEach(function (game) {
            var gameElement = document.createElement("div");
            gameElement.innerHTML = `
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <!-- Add more game details as needed -->
            `;
            gameListDiv.appendChild(gameElement);
        });
    })
    .catch(function (error) {
        console.error("Error fetching data from the API: " + error);
    });
});


