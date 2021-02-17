const plusRef = document.querySelector("[data-action='increment']");
const minusRef = document.querySelector("[data-action='decrement']");  
const spanRef = document.querySelector("#value");

let counterValue = 0;
const increment = () => {
    counterValue += 1;
  
   spanRef.textContent = counterValue;
  };
  
  const decrement = () => {
    counterValue -= 1;
  
    spanRef.textContent = counterValue;
  };
  plusRef.addEventListener('click', increment);
  minusRef.addEventListener('click', decrement);