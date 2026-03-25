// Auto-slide background images
const bgContainer = document.getElementById("bgContainer");
const images = [
    "https://via.placeholder.com/1920x1080?text=Background+1",
    "https://via.placeholder.com/1920x1080?text=Background+2",
    "https://via.placeholder.com/1920x1080?text=Background+3"
];

let currentImageIndex = 0;

function slideBackground() {
    bgContainer.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(slideBackground, 5000);
slideBackground(); // Show first image immediately

// Show alert when "Follow for More" is clicked
document.getElementById("followBtn").addEventListener("click", function() {
    alert("Follow for More! (Login coming soon)");
});