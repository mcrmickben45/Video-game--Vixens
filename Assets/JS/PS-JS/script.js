document.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".banner");
    var console1Button = document.getElementById("console2");
    console2Button.addEventListener("click", function () {
        banner.style.display = "none";
    });
});
var console2Button = document.getElementById("console2");