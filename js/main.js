"use strict";

const heroSlides = [...document.querySelectorAll(".hero-slide")];
const heroDots = [...document.querySelectorAll(".hero-dots button")];
let heroIndex = 0;

function showHero(index) {
  heroIndex = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, i) => slide.classList.toggle("active", i === heroIndex));
  heroDots.forEach((dot, i) => dot.classList.toggle("active", i === heroIndex));
}

document.querySelector(".hero-prev").addEventListener("click", () => showHero(heroIndex - 1));
document.querySelector(".hero-next").addEventListener("click", () => showHero(heroIndex + 1));
heroDots.forEach((dot, index) => dot.addEventListener("click", () => showHero(index)));
let heroTimer = setInterval(() => showHero(heroIndex + 1), 6000);
document.querySelector(".hero").addEventListener("mouseenter", () => clearInterval(heroTimer));
document.querySelector(".hero").addEventListener("mouseleave", () => {
  heroTimer = setInterval(() => showHero(heroIndex + 1), 6000);
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  mainNav.classList.toggle("open", !open);
});
mainNav.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
});

const weddingDate = new Date("2030-04-16T11:30:00");
function updateCountdown() {
  const distance = Math.max(0, weddingDate.getTime() - Date.now());
  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance / 3600000) % 24);
  const minutes = Math.floor((distance / 60000) % 60);
  const seconds = Math.floor((distance / 1000) % 60);
  document.querySelector('[data-count="days"]').textContent = String(days).padStart(2, "0");
  document.querySelector('[data-count="hours"]').textContent = String(hours).padStart(2, "0");
  document.querySelector('[data-count="minutes"]').textContent = String(minutes).padStart(2, "0");
  document.querySelector('[data-count="seconds"]').textContent = String(seconds).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

const galleryTrack = document.querySelector(".gallery-track");
const galleryImages = [...galleryTrack.querySelectorAll("img")];
let galleryIndex = 0;
function showGallery(index) {
  galleryIndex = (index + galleryImages.length) % galleryImages.length;
  const visible = window.innerWidth < 700 ? 1 : 2;
  const offset = Math.min(galleryIndex, galleryImages.length - visible);
  galleryTrack.style.transform = `translateX(-${offset * (100 / visible)}%)`;
}
document.querySelector(".gallery-prev").addEventListener("click", () => showGallery(galleryIndex - 1));
document.querySelector(".gallery-next").addEventListener("click", () => showGallery(galleryIndex + 1));
window.addEventListener("resize", () => showGallery(galleryIndex));

document.querySelector(".rsvp-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector(".form-status").textContent = "Thank you. Your response has been received.";
  event.currentTarget.reset();
});
