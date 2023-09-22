// Array of image file paths
const imageFiles = [
    './assets/Images/Games-Images/smite.jpg', 
    './assets/Images/Games-Images/FallGuys.jpg',
    './assets/images/Games-Images/Asphalt.jpeg',
    './assets/Images/Games-Images/lol.jpg', 
    './assets/Images/Games-Images/kartrider.jpg',
    './assets/images/Games-Images/BrawlHalla.jpeg',
    './assets/Images/Games-Images/genshin.jpg',
    './assets/Images/Games-Images/Warframe.jpg',
    './assets/images/Games-Images/Destiny 2.jpeg',
    './assets/Images/Games-Images/apex-legends.jpg', 
    './assets/images/Games-Images/Fortnite.jpeg',
    './assets/Images/Games-Images/runescape.jpg', 
    './assets/images/Games-Images/Halo.jpeg',
    './assets/Images/Games-Images/brawlhalla.jpg',
    './assets/images/Games-Images/Rocket League.jpeg',
];

// Function to create and organize images in a grid
function organizeImages() {
    const imageContainer = document.getElementById('mediaContainer'); // Update ID here
     // Loop through the image files and create image elements
     imageFiles.forEach((imageFile, index) => {
        const imageElement = document.createElement('img');
        imageElement.src = imageFile;
        imageElement.alt = 'Image';
        imageElement.className = 'image'; // Optional: Add a CSS class for styling

        // Add CSS styles for uniform image size and arranging them in rows of three
        imageElement.style.width = '30%'; // Adjust the width as needed
        imageElement.style.margin = '5px'; // Add margin for spacing

        // Append each image element to the container
        imageContainer.appendChild(imageElement);

        // Add a line break after every third image to arrange them in rows
        if ((index + 1) % 3 === 0) {
            const lineBreak = document.createElement('br');
            imageContainer.appendChild(lineBreak);
        }
    });
}
// Call the function to organize and display the images
organizeImages();


// Function to create and organize images in a grid
function organizeImages() {
    const imageContainer = document.getElementById('imageContainer');

    // Loop through the image files and create image elements
    imageFiles.forEach(imageFile => {
        const imageElement = document.createElement('img');
        imageElement.src = imageFile;
        imageElement.alt = 'Image';
        imageElement.className = 'image'; // Optional: Add a CSS class for styling
            // Append each image element to the container
            imageContainer.appendChild(imageElement);
        });
    }
    
    // Call the function to organize and display the images
    organizeImages();