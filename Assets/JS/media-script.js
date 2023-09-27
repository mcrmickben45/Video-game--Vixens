/* Creates an array of image file paths on homepage */
const imageFiles = [
    './Assets/images/Games-Images/smite.jpg', 
    './Assets/images/Games-Images/FallGuys.jpg',
    './Assets/images/Games-Images/Asphalt.jpeg',
    './Assets/images/Games-Images/lol.jpg', 
    './Assets/images/Games-Images/kartrider.jpg',
    './Assets/images/Games-Images/BrawlHalla.jpeg',
    './Assets/images/Games-Images/genshin.jpg',
    './Assets/images/Games-Images/Warframe.jpg',
    './Assets/images/Games-Images/Destiny 2.jpeg',
    './Assets/images/Games-Images/apex-legends.jpg', 
    './Assets/images/Games-Images/Fortnite.jpeg',
    './Assets/images/Games-Images/runescape.jpg', 
    './Assets/images/Games-Images/Halo.jpeg',
    './Assets/images/Games-Images/brawlhalla.jpg',
    './Assets/images/Games-Images/Rocket League.jpeg',
];

/* Function creates and organizes images in grid */
function organizeImages() {
    const imageContainer = document.getElementById('mediaContainer');
     /* Loops through image files and creates image elements */
     imageFiles.forEach((imageFile, index) => {
        const imageElement = document.createElement('img');
        imageElement.src = imageFile;
        imageElement.alt = 'image';
        imageElement.className = 'image'; 

        /* Add CSS styles for uniform image size and arranging them in rows of three */
        imageElement.style.width = '30%'; 
        imageElement.style.margin = '5px';

        imageContainer.appendChild(imageElement);

        /* Adds line break after every third image to arrange in rows */
        if ((index + 1) % 3 === 0) {
            const lineBreak = document.createElement('br');
            imageContainer.appendChild(lineBreak);
        }
    });
}
/* Calls the function to organize and display the images */
organizeImages();


/* Function creates and organizes images into grid */
function organizeImages() {
    const imageContainer = document.getElementById('imageContainer');

    imageFiles.forEach(imageFile => {
        const imageElement = document.createElement('img');
        imageElement.src = imageFile;
        imageElement.alt = 'image';
        imageElement.className = 'image'; 
            imageContainer.appendChild(imageElement);
        });
    }
    
/* Calls function to organize and display images */
organizeImages();