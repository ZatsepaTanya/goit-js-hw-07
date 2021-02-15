"use strict";

const totalCategory = document.querySelectorAll(".item");
console.log(`В списке ${totalCategory.length} категории.`);

const categoryName = [...totalCategory]
  .map(
    category => `Категория: ${category.children[0].textContent}
Количество элементов: ${category.children[1].children.length}`
  )
  .join("\n");
console.log(categoryName);