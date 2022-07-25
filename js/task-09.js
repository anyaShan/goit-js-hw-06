function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// console.log(getRandomHexColor());

const body = document.body;
const colorBtnEl = document.querySelector('.change-color');
const colorTextEl = document.querySelector('.color');

function onChangeColor(event) {
  const colorBody = getRandomHexColor();
  body.style.backgroundColor = colorBody;
  colorTextEl.textContent = colorBody;
}

colorBtnEl.addEventListener('click', onChangeColor);
