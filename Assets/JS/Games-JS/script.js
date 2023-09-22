document.addEventListener('DOMContentLoaded', function () {
    // Get references to the banner and imageContainer
    const banner = document.querySelector('.banner');
    const imageContainer = document.querySelector('#imageContainer');

    // Get reference to the newgames button
    const newgamesButton = document.querySelector('#newgames');

    // Add a click event listener to the newgames button
    newgamesButton.addEventListener('click', function () {
        // Hide the banner and imageContainer
        banner.style.display = 'none';
        imageContainer.style.display = 'none';

        // Create and populate the sort dropdown
        const sortDropdown = document.createElement('select');
        sortDropdown.id = 'sortDropdown';

        // Add options to the dropdown
        const options = [
            { value: 'popularity', text: 'Popularity' },
            { value: 'release_date', text: 'Release Date' },
            // Add more sorting options as needed
        ];

        options.forEach((option) => {
            const dropdownOption = document.createElement('option');
            dropdownOption.value = option.value;
            dropdownOption.textContent = option.text;
            sortDropdown.appendChild(dropdownOption);
        });

        // Append the sortDropdown to a container or form on your page
        // Example:
        const filterContainer = document.querySelector('#filterContainer');
        filterContainer.appendChild(sortDropdown);

        // Fetch data from the API
        fetch('https://www.freetogame.com/api/games?platform=pc')
            .then((response) => response.json())
            .then((data) => {
                // Process and display the fetched data as needed
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    });
});
