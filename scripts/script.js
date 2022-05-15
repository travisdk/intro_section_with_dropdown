const toggleMenuButton = document.querySelector("#toggle-menu-button");
// When user press hamburger icon
toggleMenuButton.addEventListener("click", (e) => {
  const btn = e.target;
  const navLinks = document.querySelector("#nav-links");
  const dimmer = document.querySelector(".dimmer");
  btn.classList.toggle("expanded");
  navLinks.classList.toggle("expanded");
  dimmer.classList.toggle("dim");
});

// When user press any nav-link
// In case the nav-link has submenu beneath it, it is made visible.
// All others are collapsed

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    const link = e.target;
    if (link.classList.contains("has-sub")) {
      link.classList.toggle("expanded");
      const subMenu = link.nextElementSibling;
      subMenu.classList.toggle("expanded");
    }
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((l) => {
      if (l.classList.contains("has-sub") && l != link) {
        l.classList.remove("expanded");
        l.nextElementSibling.classList.remove("expanded");
      }
    });
  });
});
