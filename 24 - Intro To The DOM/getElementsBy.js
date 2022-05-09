// Selecting Elements
  // using JS methods to single out an element or group of elements to make changes

// getElementById();
  // a method to select an element by the id attribute in HTML
document.getElementById('chicken_image');
  // save the element to a variable
const chicken_image = document.getElementById('chicken_image');
  // the getElementById method actually requests the DOM object representing that element, not the element itself, and provides access to all the properties contained in that object



// getElementsByTagName
  // a method to select a group of elements that share the same tag name
  // returns an HTML Collection (not an array - no access to array methods)
  // An HTML collection is iterable, with indexes, a length property, and for...of
document.getElementsByTagName('div'); 

const allImages = document.getElementsByTagName('img');
    // selects all images by their tag name
  for (let img of allImages) {
    // changes all images on the page to the same source
    img.src = "some-source.jpg";
  }


  
  // getElementsByClassName
    // selects all elements of a particular class name
let squareImages = document.getElementsByClassName('className');
    // changes all images with class 'className' to the same source
  for (let img of squareImages) {
      img.src = 'some-source.jpg';
}






