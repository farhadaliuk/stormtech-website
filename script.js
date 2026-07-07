document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".reveal").forEach(function (el) {
    el.classList.add("visible");
  });

  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      siteNav.classList.toggle("open");
    });
  }
});
