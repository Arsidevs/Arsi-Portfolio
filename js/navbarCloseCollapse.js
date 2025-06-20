document.querySelectorAll(".nav-link").forEach(function (navLink) {
  navLink.addEventListener("click", function (e) {
    // Skip collapsing if it's a dropdown toggle
    if (navLink.classList.contains("dropdown-toggle")) return;

    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    if (
      window.getComputedStyle(navbarToggler).display !== "none" &&
      navbarCollapse.classList.contains("show")
    ) {
      navbarToggler.click();
    }
  });
});

// Optional: also collapse when a dropdown item is clicked
document.querySelectorAll(".dropdown-item").forEach(function (item) {
  item.addEventListener("click", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    if (
      window.getComputedStyle(navbarToggler).display !== "none" &&
      navbarCollapse.classList.contains("show")
    ) {
      navbarToggler.click();
    }
  });
});
