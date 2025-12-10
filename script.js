// Theme toggle (light / dark)
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    themeToggle.textContent = "Light mode";
  } else {
    themeToggle.textContent = "Dark mode";
  }
});

// Simple toast when clicking "Adopt" buttons
const toast = document.getElementById("toast");
const adoptButtons = document.querySelectorAll(".adopt-btn");

adoptButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const petName = btn.dataset.pet || "this pet";
    showToast(`Yay! We'll reach out about ${petName} soon 🐾`);
  });
});

let toastTimeout;

function showToast(message) {
  toast.textContent = message;

  // Reset if already visible
  toast.classList.remove("show");
  void toast.offsetWidth; // force reflow so animation restarts

  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}
