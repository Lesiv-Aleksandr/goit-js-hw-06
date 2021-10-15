
const allElementListCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allElementListCategories.length}`);

const categoriesName = allElementListCategories.forEach(element => {
   
    console.log(`Category: ${element.firstElementChild.textContent}`);
    
    console.log(`Elements: ${element.lastElementChild.querySelectorAll('li').length}`);
});