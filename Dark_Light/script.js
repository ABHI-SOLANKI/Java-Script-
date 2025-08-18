const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Switch To Light Mode";
  } else {
    toggleBtn.textContent = "Switch To Dark Mode";
  }
});
