const itemsOfCategories = document.querySelectorAll('.item');
const numberOfCategories = itemsOfCategories.length;
console.log(`Number of categories: ${numberOfCategories}`);

const valuesOfCategories = itemsOfCategories.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
