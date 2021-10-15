// const imputRef = document.querySelector("#name-input");
// const spanNameOutputRef = document.querySelector('#name-output');

// imputRef.addEventListener("input" ,(e) => {
 
//     if (e.currentTarget.value.length !== 0) {spanNameOutputRef.textContent = e.currentTarget.value} else
//     {spanNameOutputRef.textContent = 'Anonymous'};
 
  
//     console.log(e.currentTarget.value.length);
//   });





///////////////////////////////////////////////////
const imputRef = document.querySelector("#name-input");
const spanNameOutputRef = document.querySelector('#name-output');

imputRef.addEventListener("input" ,(e) => {
    e.currentTarget.value.length !== 0 ? spanNameOutputRef.textContent = e.currentTarget.value :
    spanNameOutputRef.textContent = 'Anonymous';
  });
