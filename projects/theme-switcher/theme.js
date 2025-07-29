const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.addEventListener("change", () => {
  body.classList.toggle("dark");
});
