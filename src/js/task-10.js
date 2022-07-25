const refs = {
  inputNumberEl: document.querySelector('#controls>input'),
  createBtnEl: document.querySelector('[data-create]'),
  destroyBtnEl: document.querySelector('[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),
  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  },
};

refs.inputNumberEl.value = '';

const createBoxes = amount => {
  refs.boxesEl.innerHTML = '';
  amount = Number(refs.inputNumberEl.value);

  let containerArr = [];

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.classList.add('box');

    const firstBoxSize = 30;

    boxEl.style.width = `${firstBoxSize + i * 10}px`;
    boxEl.style.height = `${firstBoxSize + i * 10}px`;
    boxEl.style.backgroundColor = refs.getRandomHexColor();
    containerArr.push(boxEl);
  }

  return containerArr;
};

const onCreateBoxesEl = event => {
  const containerOfBoxes = createBoxes();
  refs.boxesEl.append(...containerOfBoxes);
};

const onDestroyBoxesEl = event => {
  refs.boxesEl.innerHTML = '';
  refs.inputNumberEl.value = '';
};

refs.createBtnEl.addEventListener('click', onCreateBoxesEl);
refs.destroyBtnEl.addEventListener('click', onDestroyBoxesEl);
