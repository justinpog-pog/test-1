const btn = document.getElementById("btn");
const root = document.documentElement;

btn.addEventListener("click", () => {
    root.style.setProperty("--header-color", "#4B0C37");
});

//-----------------------------------------------------------------------------------------

const colors = ["#A92655", "#FD8D67", "#F7DC6F", "#2ECC71"];

btna.addEventListener("click", () => {
  const boite = btna.previousElementSibling;
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  boite.style.backgroundColor = randomColor;
});
