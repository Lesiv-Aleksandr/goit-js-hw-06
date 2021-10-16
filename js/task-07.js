

    const fontSizeControlRef = document.getElementById("font-size-control");
    const spanTextRef = document.querySelector('#text'); 
    fontSizeControlRef.addEventListener("input", () => {            
        spanTextRef.style.fontSize = fontSizeControlRef.value + 'px'           
      });