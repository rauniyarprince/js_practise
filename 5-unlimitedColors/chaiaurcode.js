const randomcolor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};

let intervalId;

const colorCodeText = document.querySelector("#colorCode");

function changeBgColor() {
  const newColor = randomcolor();
  document.body.style.backgroundColor = newColor;
  colorCodeText.innerText = newColor; // 🔥 show color
}

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#copy").addEventListener("click", function () {
  const color = colorCodeText.innerText;
  navigator.clipboard.writeText(color);
  alert("Copied: " + color);
});


document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);