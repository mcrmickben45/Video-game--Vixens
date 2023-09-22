const imageFiles = [
    './assets/images/Xbox-Images/Asphalt.jpeg',
    './assets/images/Xbox-Images/BrawlHalla.jpeg',
    './assets/images/Xbox-Images/Destiny 2.jpeg',
    './assets/images/Xbox-Images/Fortnite.jpeg',
    './assets/images/Xbox-Images/Halo.jpeg',
    './assets/images/Xbox-Images/Rocket League.jpeg',
];



document.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".banner");
    var console3Button = document.getElementById("console3");
    console3Button.addEventListener("click", function () {
        banner.style.display = "none";
    });
});
var console3Button = document.getElementById("console3");