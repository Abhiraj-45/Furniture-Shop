// Menu Button and Navigation Links
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Search Toggle
const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", () => {
  navSearch.classList.toggle("open");
});

// Scroll Reveal Animation
const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOptions,
  origin: "right",
});

ScrollReveal().reveal(".header__content div", {
  duration: 1000,
  delay: 500,
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOptions,
  delay: 1000,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOptions,
  delay: 1500,
});

ScrollReveal().reveal(".deals__card", {
  ...scrollRevealOptions,
  interval: 500,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOptions,
  origin: "right",
});

ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
  delay: 500,
});

// Swiper Initialization
const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 1,
  spaceBetween: 20,
});