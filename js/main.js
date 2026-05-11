const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("is-open");
  });
}


/* ========================================
   STICKY BANNER SCRIPT
   Add this to js/main.js
======================================== */
const banner = document.getElementById("sticky-banner");
const bannerCloseBtn = document.getElementById("bannerCloseBtn");

let lastScrollY = 0;
let bannerDismissed = false;
const HIDE_THRESHOLD = 40;

function handleBannerScroll() {
  if (!banner || bannerDismissed) return;

  const currentScrollY = window.scrollY;
  const scrollingDown = currentScrollY > lastScrollY;

  if (scrollingDown && currentScrollY > HIDE_THRESHOLD) {
    banner.classList.add("hidden");
  } else {
    banner.classList.remove("hidden");
  }

  lastScrollY = currentScrollY;
}

window.addEventListener("scroll", handleBannerScroll, { passive: true });

if (bannerCloseBtn && banner) {
  bannerCloseBtn.addEventListener("click", () => {
    bannerDismissed = true;
    banner.classList.add("hidden");

    banner.addEventListener(
      "transitionend",
      () => {
        banner.style.display = "none";
      },
      { once: true }
    );
  });
}

const text = "I turn ambitious ideas into fast, clean, and scalable web applications.";
const typingElement = document.getElementById("typing-text");

let index = 0;

function typeText() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 45); // typing speed
  }
}

window.addEventListener("load", typeText);