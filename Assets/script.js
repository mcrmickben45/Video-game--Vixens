document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-button");
    const searchBar = document.getElementById("search-bar");
    const searchForm = document.getElementById("search-form");
  
    // Function to toggle the visibility of the search bar
    function toggleSearchBar() {
      searchBar.classList.toggle("hidden");
    }
  
    // Function to handle form submission
    function submitSearch() {
      const query = document.getElementById("query-input").value;
      
      // You can replace this with the actual search functionality or URL
      alert(`Searching for: ${query}`);
    }
  
    // Attach event listeners
    searchButton.addEventListener("click", toggleSearchBar);
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevents the form from submitting normally
      submitSearch();
    });
  });
  
  