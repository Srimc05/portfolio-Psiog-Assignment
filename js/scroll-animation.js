// scroll-animation.js

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  }
);

document
  .querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale"
  )
  .forEach((el) => observer.observe(el));