// Removing Elements

  // removeChild
  // doesn't remove the selected element
  // requires selecting the parent element and passing the element to be removed
const firstLi = document.querySelector('li');
const ul = firstLi.parentElement;
ul.removeChild(firstLi);


  // remove
const img = document.querySelector('img');
img.remove();