const btnBefore = document.getElementById("btnBefore");
const btnAfter = document.getElementById("btnAfter");
const root = document.body;

function setMode(mode) {
  root.classList.remove("mode-before", "mode-after");

  const beforeOn = mode === "before";
  const afterOn = mode === "after";

  btnBefore.setAttribute("aria-pressed", beforeOn ? "true" : "false");
  btnAfter.setAttribute("aria-pressed", afterOn ? "true" : "false");

  if (beforeOn) root.classList.add("mode-before");
  if (afterOn) root.classList.add("mode-after");
}

btnBefore.addEventListener("click", () => {
  const isOn = root.classList.contains("mode-before");
  setMode(isOn ? "normal" : "before");
});

btnAfter.addEventListener("click", () => {
  const isOn = root.classList.contains("mode-after");
  setMode(isOn ? "normal" : "after");
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMode("normal");
});
