const toggleMenuButton = document.querySelector("#toggle-menu-button");

toggleMenuButton.addEventListener("click", (e) => {
  const btn = e.target;
  const navLinks = document.querySelector("#nav-links");
  const dimmer = document.querySelector(".dimmer");
  btn.classList.toggle("expanded");
  navLinks.classList.toggle("expanded");
  dimmer.classList.toggle("dim");
});

// Is .has-sub class neccessary ??
const subMenuLinks = document.querySelectorAll(".has-sub");
subMenuLinks.forEach((subMenuLink) => {
  subMenuLink.addEventListener("click", (e) => {
    const link = e.target;
    link.classList.toggle("expanded");
    const subMenu = link.nextElementSibling;
    subMenu.classList.toggle("expanded");
  });
});
