const inputRef = document.querySelector("#font-size-control");
const fontSizeRef = document.querySelector("#text");

inputRef.addEventListener("input", event =>{
    fontSizeRef.style.fontSize = event.currentTarget.value + "px";
});
