const colorButton = document.querySelectorAll(".colorButton");
const textarea = document.getElementById("textarea");
const gradientbox = document.getElementById("gradient-box");
const Select = document.getElementById("select");
const refreshBtn = document.getElementById("Refresh-Btn");
const copyBtn = document.getElementById("Copy-Btn");
const callColorbtn = function () {
  let linerGrident = `linear-gradient(to ${Select.value},${colorButton[0].value},${colorButton[1].value})`;
  console.log(linerGrident);
  gradientbox.style.background = linerGrident;
  textarea.innerText = linerGrident;
};

colorButton[0].addEventListener("input", callColorbtn);
colorButton[1].addEventListener("input", callColorbtn);
Select.addEventListener("input", callColorbtn);

function randomHexColor() {
  let temp = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${temp}`;
}
refreshBtn.addEventListener("click", function () {
  let firstColor = randomHexColor();
  let secondCOlor = randomHexColor();
  let randomGradient = `linear-gradient(to ${Select.value},${firstColor},${secondCOlor})`;
  colorButton[0].value = firstColor;
  colorButton[1].value = secondCOlor;
  // console.log(linerGrident);
  gradientbox.style.background = randomGradient;
  textarea.innerHTML = randomGradient;
});

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(textarea.value);
  copyBtn.innerText = "Copied";
  copyBtn.style.background = "#4a53a1";
  setTimeout(() => {
    copyBtn.innerText = "Copy Code";
    copyBtn.style.background = "";
  }, 1600);
});
