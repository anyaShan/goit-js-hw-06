let counterValue = 0;

const counterEl = document.querySelector('#value');
// console.log(counterEl.textContent);
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');

const handleClickDecrement = event => {
  return (counterEl.textContent = counterValue -= 1);
};

const handleClickIncrement = event => {
  return (counterEl.textContent = counterValue += 1);
};

decrementBtnEl.addEventListener('click', handleClickDecrement);
incrementBtnEl.addEventListener('click', handleClickIncrement);
