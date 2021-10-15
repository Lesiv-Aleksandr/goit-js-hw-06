const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const newItem = ingredients.forEach(content => {
  
  const newEl = document.createElement('li');
  newEl.classList.add('item');
  newEl.textContent = content;
  console.log( ingredientsRef.appendChild(newEl));
});
console.log(ingredientsRef);



