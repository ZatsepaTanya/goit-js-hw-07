"use strict";
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

let ulList = document.getElementById("ingredients");
const newList = ingredients.forEach(ingredient=>{
  let elementUl = document.createElement('li');
  elementUl.innerHTML = ingredient;
  // ulList.append(elementUl);
   console.log(elementUl);
  });
  // console.log(ulList);

  