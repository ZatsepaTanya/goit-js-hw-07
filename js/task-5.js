const inputRef = document.querySelector("input#name-input");
const nameRef = document.querySelector("span#name-output");

inputRef.addEventListener('input', event=>{
    if (inputRef.value === ''){
        nameRef.textContent = 'незнакомец';
    }else
    nameRef.textContent = event.target.value;
})