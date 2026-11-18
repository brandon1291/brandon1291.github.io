// 1. Greeting that changes with the time of day (only runs on the home page)
const greeting = document.getElementById("greeting");

if (greeting) {
  const hour = new Date().getHours();
  let message;

  if (hour < 12) {
    message = "Good morning!";
  } else if (hour < 18) {
    message = "Good afternoon!";
  } else {
    message = "Good evening!";
  }

  greeting.textContent = message;
}

// 2. Dark mode button (works on every page that has the button)
const themeButton = document.getElementById("theme-button");

if (themeButton) {
  themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      themeButton.textContent = "Switch to light mode";
    } else {
      themeButton.textContent = "Switch to dark mode";
    }
  });
}
