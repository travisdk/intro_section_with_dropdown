const toggleMenuButton = document.querySelector("#toggle-menu-button");

toggleMenuButton.addEventListener("click", (e) => {
  const btn = e.target;
  navLinks = document.querySelector("#nav-links");
  if (btn.classList.contains("collapsed")) {
    // EXPAND NOW
    btn.classList.add("expanded");
    btn.classList.remove("collapsed");
    navLinks.classList.add("expanded");
    navLinks.classList.remove("collapsed");
  } else if (btn.classList.contains("expanded")) {
    // COLLAPSE NOW
    btn.classList.add("collapsed");
    btn.classList.remove("expanded");
    navLinks.classList.add("collapsed");
    navLinks.classList.remove("expanded");
  }
});

const subMenuLinks = document.querySelectorAll(".has-sub");
subMenuLinks.forEach((subMenuLink) => {
  subMenuLink.addEventListener("click", (e) => {
    const link = e.target;
    link.classList.toggle("expanded");
    const subMenu = link.nextElementSibling;
    subMenu.classList.toggle("expanded");
  });
});
