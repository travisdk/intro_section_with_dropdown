const toggleMenuButton = document.querySelector("#toggle-menu-button");
toggleMenuButton.addEventListener("click", (e) => {
  const btn = e.target;
  if (btn.classList.contains("collapsed")) {
    // EXPAND NOW
    btn.classList.add("expanded");
    btn.classList.remove("collapsed");
  } else if (btn.classList.contains("expanded")) {
    // COLLAPSE NOW
    btn.classList.add("collapsed");
    btn.classList.remove("expanded");
  }
});
