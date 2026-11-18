// Dark mode button
const themeButton = document.getElementById("theme-button");
if (themeButton) {
  themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    themeButton.textContent = document.body.classList.contains("dark") ? "Light mode" : "Dark mode";
  });
}

// Quick website check
const boxes = document.querySelectorAll(".check input");
if (boxes.length) {
  const fill = document.getElementById("score-fill");
  const scoreText = document.getElementById("score-text");
  const tip = document.getElementById("score-tip");

  function updateScore() {
    let done = 0;
    let firstMissing = null;
    boxes.forEach(function (box) {
      if (box.checked) {
        done++;
      } else if (!firstMissing) {
        firstMissing = box;
      }
    });
    fill.style.width = (done / boxes.length) * 100 + "%";
    scoreText.textContent = "Score: " + done + " of " + boxes.length;
    if (done === 0) {
      tip.textContent = "Tick the boxes above to see your score.";
    } else if (firstMissing) {
      tip.textContent = "Fix this next: " + firstMissing.dataset.tip;
    } else {
      tip.textContent = "Great start. Email me and I'll look for deeper improvements.";
    }
  }

  boxes.forEach(function (box) {
    box.addEventListener("change", updateScore);
  });
}
