// Append & Append Child
  // creates new elements on the page

  // appendChild
const newImg = document.createElement('img');
newImg.src = 'source.jpg';
document.body.appendChild(newImg); // appends as the last child of the given element; doesn't accept strings, only values


  // append
    // accepts strings directly
const p = document.querySelector('p');
const newB = document.createElement('b');
const secondAppend = newB.append('New Bold text');
p.append('I am new text!'); // appends to the end of the given element
p.prepend('I start the paragraph'); // prepends argument to the beginnig of an element
    // more flexible, accepts more than one node
p.append('First append', secondAppend);


  // insertAdjacentElement
const h1 = document.querySelector('h1');
h1.insertAdjacentElement('position', 'element'); // positions include:
// 'beforebegin' : before the targetElement itself 
// 'afterbegin' : just inside the targetElement, before first child
// 'beforeend' : just inside the targetElement, after its last child
// 'afterend' : after the targetElement itself


  // after
const h3 = document.createElement('h3');
h3.innerText = 'I am h3';
h1.after(h3);