const widgetBtn = document.querySelector('.widget .change-color');
const spanColorRef  = document.querySelector('.widget .color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function colorChange (e){  
  spanColorRef.textContent = getRandomHexColor();
  if (!e.target.classList.contains('.change-color')) { 
  }
return document.body.style.background = getRandomHexColor();
}

widgetBtn.addEventListener('click', (colorChange));