const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listIngredientsEl = document.querySelector('#ingredients');

const itemsIngredientsEl = ingredients.map(ingredient => {
  const itemIngredientsEl = document.createElement('li');
  itemIngredientsEl.classList.add('item');
  itemIngredientsEl.textContent = `${ingredient}`;
  return itemIngredientsEl;
});

listIngredientsEl.append(...itemsIngredientsEl);
