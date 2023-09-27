/* Empty array to store favorite jokes */
let favoriteJokes = [];

/* Function displays jokes and codes favorites */
function displayFavoriteJokes() {
  const favoriteJokesContainer = document.getElementById("favoriteJokesContainer");
  favoriteJokesContainer.innerHTML = "";

  if (favoriteJokes.length === 0) {
    favoriteJokesContainer.textContent = "You have no favorite jokes yet.";
    return;
  }

  favoriteJokes.forEach(function (joke, index) {
    var jokeElement = document.createElement("div");
    jokeElement.classList.add("favorite-joke");
    jokeElement.innerHTML = `
      <p>${index + 1}. ${joke}</p>
      <button class="remove-favorite" data-index="${index}">Remove</button>
    `;
    favoriteJokesContainer.appendChild(jokeElement);

    /* Function prompts removal of jokes from favorites */
    var removeButton = jokeElement.querySelector(".remove-favorite");
    removeButton.addEventListener("click", function () {
      var removeIndex = parseInt(removeButton.getAttribute("data-index"));
      favoriteJokes.splice(removeIndex, 1);
      displayFavoriteJokes();
      saveFavoriteJokesToLocalStorage();
    });
  });
}

/* Function saves favorite jokes to client-side localStorage */
function saveFavoriteJokesToLocalStorage() {
  localStorage.setItem("favoriteJokes", JSON.stringify(favoriteJokes));
}

/* Function loads favorite jokes from client-side localStorage */
function loadFavoriteJokesFromLocalStorage() {
  var storedJokes = localStorage.getItem("favoriteJokes");
  if (storedJokes) {
    favoriteJokes = JSON.parse(storedJokes);
  }
}

/* Calls loadFavoriteJokesFromLocalStorage to load existing favorite jokes */
loadFavoriteJokesFromLocalStorage();

/*  Existing openDadModal function adds jokes to favorites when clicked */
function openDadModal() {
  var modal = document.getElementById("dadModal");
  modal.style.display = "block";

  var dadJokeContainer = document.getElementById("dadJokeContainer");
  var userInput = document.getElementById("userInput");

  /* Function calls fetches more jokes when enter is clicked */
  userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      var userInputValue = userInput.value.toLowerCase();
      if (userInputValue === "yes") {
        /* Fetches a dad joke from the API when the user types "yes" */
        fetch('https://icanhazdadjoke.com/', {
          headers: {
            Accept: 'application/json',
          },
        })
          .then(response => response.json())
          .then(data => {
            if (data.joke) {
              var jokeText = data.joke;

              /* Displays joke */
              var dadJokeParagraph = document.createElement("p");
              dadJokeParagraph.textContent = jokeText;
              dadJokeContainer.appendChild(dadJokeParagraph);

              dadJokeParagraph.addEventListener("click", function () {
                /* Function checks if joke is already in client-side favorites */
                if (!favoriteJokes.includes(jokeText)) {
                  favoriteJokes.push(jokeText);
                  saveFavoriteJokesToLocalStorage();
                  displayFavoriteJokes();
                }
              });
            } else {
              dadJokeContainer.textContent = "No dad jokes found.";
            }
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      } else if (userInputValue === "no") {
        modal.style.display = "none";
        dadJokeContainer.textContent = "";
      } else {
        alert("Please type 'yes' or 'no'.");
      }
    }
  });
}

/* Function to closes modal */
function closeDadModal() {
  var modal = document.getElementById("dadModal");
  modal.style.display = "none";
  var dadJokeContainer = document.getElementById("dadJokeContainer");
  dadJokeContainer.textContent = "";
}

/* Function assigns variables */
var btn = document.getElementById("dad-button");
var span = document.getElementsByClassName("close")[0];

/* Adds event listeners */
btn.addEventListener("click", openDadModal);
span.addEventListener("click", closeDadModal);

/* Closes modal when clicked outside of modal */
window.addEventListener("click", function (event) {
  var modal = document.getElementById("dadModal");
  if (event.target == modal) {
    closeDadModal();
  }
});

/* Displays existing favorite jokes when page loads */
displayFavoriteJokes();
