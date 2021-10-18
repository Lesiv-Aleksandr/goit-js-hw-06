const inputRef = document.querySelector('#validation-input');
const dataLength = document.querySelector('[data-length ="6"]');
const dataLengthNumber = Number(dataLength.dataset.length);
inputRef.addEventListener("blur", () =>{
inputRef.addEventListener("input", (e) => {
    const eCurrentTargetClassList = e.currentTarget.classList
    if (e.currentTarget.value.length === dataLengthNumber) {
        eCurrentTargetClassList.add("valid");
        eCurrentTargetClassList.replace("invalid", "valid")} else 
        {eCurrentTargetClassList.add("invalid");
        eCurrentTargetClassList.replace("valid", "invalid")}
        
  })});


  console.log(dataLengthNumber)




