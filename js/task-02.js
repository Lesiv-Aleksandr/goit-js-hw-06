const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

 
const itemsEl = ingredients.map(nameLi => {
  const newEl = document.createElement('li');
  newEl.textContent = nameLi;
  newEl.classList.add('item');
  return newEl;
});
console.log(ingredientsRef.append(...itemsEl));







