


const incrementEl = document.querySelector("[data-action='increment']");
const decrementtEl = document.querySelector("[data-action='decrement']");
const valueEl = document.querySelector('#counter #value');
let counterValue = 0;

decrementtEl.addEventListener("click", () => {
   counterValue -= 1;
   valueEl.textContent = counterValue;
});

incrementEl.addEventListener("click", () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});