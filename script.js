// script.js
let images = [];
let currentIndex = 0;

async function fetchImages() {
    const response = await fetch("https://script.google.com/macros/s/AKfycbyLsfbHrUzWQk5KYKtmVcTihEDEXbZEiBUIfMbPCebkWyoMwYaxZJbVygb4ZZnazcnxJA/exec");
    images = await response.json();
    images = images.sort(() => Math.random() - 0.5); // Shuffle images
    document.getElementById("gallery").innerHTML = images.map((url, index) => `<img src="${url}" onclick="openModal(${index})">`).join('');
}

function openModal(index) {
    currentIndex = index;
    document.getElementById("modalImage").src = images[currentIndex];
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function prevImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("modalImage").src = images[currentIndex];
}

function nextImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("modalImage").src = images[currentIndex];
}

fetchImages();
