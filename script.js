// =====================
// Background Slideshow
// =====================
const bgContainer = document.getElementById("bgContainer");
const images = [
    "https://via.placeholder.com/1920x1080/0a0f2c/ff4444?text=My+Cool+Things",
    "https://via.placeholder.com/1920x1080/1a1a1a/ffcc00?text=Discover+Awesome+Stuff",
    "https://via.placeholder.com/1920x1080/000000/ffffff?text=Follow+For+More"
];

let currentImageIndex = 0;

function slideBackground() {
    bgContainer.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(slideBackground, 5000);
slideBackground();

// =====================
// Modal Logic
// =====================
const followBtn = document.getElementById("followBtn");
const socialModal = document.getElementById("socialModal");
const loginModal = document.getElementById("loginModal");
const socialClose = document.getElementById("socialClose");
const loginClose = document.getElementById("loginClose");
const socialButtons = document.querySelectorAll('.social-btn');
const loginTitle = document.getElementById("loginTitle");
const providerInput = document.getElementById("providerInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const emailError = document.getElementById("emailError");

// Open social modal when "Follow for More" is clicked
followBtn.onclick = function() {
    socialModal.style.display = "flex";
}

// Close social modal
socialClose.onclick = function() {
    socialModal.style.display = "none";
}

// Close login modal
loginClose.onclick = function() {
    loginModal.style.display = "none";
    emailInput.value = "";
    passwordInput.value = "";
    emailError.textContent = "";
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target == socialModal) {
        socialModal.style.display = "none";
    }
    if (event.target == loginModal) {
        loginModal.style.display = "none";
        emailInput.value = "";
        passwordInput.value = "";
