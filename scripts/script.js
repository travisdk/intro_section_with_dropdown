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
