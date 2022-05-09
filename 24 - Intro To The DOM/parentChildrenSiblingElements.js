// Traversing Parent/Child/Sibling

  // parents
const h1 = document.querySelector('h1');
const h1Parent = h1.parentElement; // stores the element containing the h1
  // children
const childrenElements = h1.children; // stores the child elements
  // siblings
h1.nextSibling;
h1.previousSibling; // traverses the node list of the DOM, including whitespace and text

h1.nextElementSibling;
h1.previousElementSibling; // traverses the actual next/previous element