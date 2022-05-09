// Styles
  // are properties on the element object that correspond to CSS styles
  // are in the DOM in camelCase, not dashed as in CSS
  // values passed in to .style properties must be strings
  
const h1 = document.querySelector('h1');
h1.style.color = 'white'; // changes the text color to white
h1.style.backgroundColor = 'orange'; // notice the camelCase

  // getComputedStyle
const button = document.querySelector('#button');
window.getComputedStyle(button); // returns a CSS Style Declaration object with the computed styles of the one element
  // most often used to get the values of the present style


