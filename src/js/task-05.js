const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const handleClick = event => {
  spanEl.textContent = event.currentTarget.value;
};

inputEl.addEventListener('input', handleClick);
