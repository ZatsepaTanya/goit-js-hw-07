const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const newList = document.createElement('li')
    newList.map(ingredients);
  newList.textContent = ingredients.forEach(ingredients);
  console.log(newList);