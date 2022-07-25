const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
// spanEl.textContent = 'Anonymous';

const handleClick = event => {
  if (event.currentTarget.value === '') {
    spanEl.textContent = 'Anonymous';
  } else {
    spanEl.textContent = event.currentTarget.value;
  }
};

inputEl.addEventListener('input', handleClick);
