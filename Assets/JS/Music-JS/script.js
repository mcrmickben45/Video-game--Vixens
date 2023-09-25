function openDadModal() {
  var modal = document.getElementById("dadModal");
  modal.style.display = "block";

  var dadJokeContainer = document.getElementById("dadJokeContainer");
  var userInput = document.getElementById("userInput");

  // Add a keydown event listener to listen for user input
  userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      var userInputValue = userInput.value.toLowerCase();
      if (userInputValue === "yes") {
        // Fetch a dad joke from the API when the user types "yes"
        fetch('https://icanhazdadjoke.com/', {
          headers: {
            Accept: 'application/json', // Specify JSON response
          },
        })
          .then(response => response.json())
          .then(data => {
            // Check if the API response contains a joke
            if (data.joke) {
              // Create a paragraph element to display the dad joke
              var dadJokeParagraph = document.createElement("p");
              dadJokeParagraph.textContent = data.joke;

              // Append the paragraph to the dadJokeContainer
              dadJokeContainer.appendChild(dadJokeParagraph);
            } else {
              dadJokeContainer.textContent = "No dad jokes found.";
            }
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      } else if (userInputValue === "no") {
        // Close the modal when the user types "no"
        modal.style.display = "none";
        // Clear the dad joke content
        dadJokeContainer.textContent = "";
      } else {
        // Handle invalid input (neither "yes" nor "no")
        alert("Please type 'yes' or 'no'.");
      }
    }
  });
}

// Function to close the modal
function closeDadModal() {
  var modal = document.getElementById("dadModal");
  modal.style.display = "none";
  var dadJokeContainer = document.getElementById("dadJokeContainer");
  dadJokeContainer.textContent = "";
}

// Get references to the elements
var btn = document.getElementById("dad-button");
var span = document.getElementsByClassName("close")[0];

// Attach event listeners
btn.addEventListener("click", openDadModal);
span.addEventListener("click", closeDadModal);

// Close the modal when clicking outside
window.addEventListener("click", function(event) {
  var modal = document.getElementById("dadModal");
  if (event.target == modal) {
    closeDadModal();
  }
});
