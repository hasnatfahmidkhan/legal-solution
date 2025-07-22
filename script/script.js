const toggleBtn = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

toggleBtn.addEventListener("click", (e) => {
  navMenu.classList.toggle("hidden");
  e.stopPropagation(); // Prevent event from bubbling to document
});

document.addEventListener("click", (e) => {
  // If the menu is open and click target is outside nav and toggle button
  if (
    !navMenu.classList.contains("hidden") &&
    !navMenu.contains(e.target) &&
    !toggleBtn.contains(e.target)
  ) {
    navMenu.classList.add("hidden");
  }
});
