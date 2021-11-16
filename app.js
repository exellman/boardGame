const board = document.querySelector("#board");
const buttonsList = document.querySelector("#buttons");
const buttons = document.querySelectorAll(".color-btn");
const colors = [
  ["#2263D6", "#195ACA", "#2576F9", "#3D78E4", "#043B9D"],
  ["#7A030E", "#E40000", "#FF0D00", "#DA9D90", "#E17152"],
  ["#1C2E0A", "#617C07", "#455B2D", "#C4C4C2", "#99B722"],
  ["#686B61", "#3B3F35", "#D6D4CD", "#9FA097", "#82847B"],
  ["#240922", "#69114A", "#F5003D", "#E6A5D9", "#D03FBF"],
];
const SQUARES_NUMBER = 500;
let colorPalette = 0;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => {
    setColor(square);
  });
  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}

for (const btn of buttons) {
  btn.style.backgroundColor = btn.getAttribute("data-color");
  btn.style.boxShadow = `0 0 2px ${btn.getAttribute(
    "data-color"
  )}, 0 0 10px ${btn.getAttribute("data-color")}`;
}

buttonsList.addEventListener("click", (event) => {
  if (event.target.classList.contains("color-btn")) {
    let i = event.target.getAttribute("data-color");
    switch (i) {
      case "blue":
        colorPalette = 0;
        break;
      case "red":
        colorPalette = 1;
        break;
      case "green":
        colorPalette = 2;
        break;
      case "grey":
        colorPalette = 3;
        break;
      case "pink":
        colorPalette = 4;
        break;
      default:
        colorPalette = 0;
        break;
    }
  }
});

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors[colorPalette].length);
  return colors[colorPalette][index];
}
