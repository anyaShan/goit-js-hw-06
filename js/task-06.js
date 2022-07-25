const inputEl = document.querySelector('#validation-input');

const inputLengthEl = document.querySelector('[data-length]');
const inputLengthValue = inputLengthEl.dataset.length;
// console.log(inputLengthValue);

const onInputFocus = event => {
  inputEl.classList.remove('valid', 'invalid');
  inputEl.value = '';
};

const onInputBlur = event => {
  if (inputEl.value.length !== Number(inputLengthValue)) {
    inputEl.classList.add('invalid');
  } else {
    inputEl.classList.add('valid');
  }
};

inputEl.addEventListener('focus', onInputFocus);
inputEl.addEventListener('blur', onInputBlur);
