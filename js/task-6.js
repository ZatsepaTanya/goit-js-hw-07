const validationInputRef = document.querySelector('#validation-input');


validationInputRef.addEventListener("blur", event=>{
    if (event.target.value.length !== +validationInputRef.dataset.length) {
        validationInputRef.classList.remove("valid");
        validationInputRef.classList.add("invalid");
      } else {
        validationInputRef.classList.remove("invalid");
        validationInputRef.classList.add("valid");
      }

})

