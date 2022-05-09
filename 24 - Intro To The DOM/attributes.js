// Working with HTML Attributes

  // returns the id attribute
const bannerId = document.querySelector('#banner').id;
  // returns the given attribute
const firstLink = document.querySelector('a');
firstLink.getAttribute('href'); // directly from the HTML
firstLink.href = 'http://www.google.com'; // changes the computed value

  // setAttribute
const input = document.querySelector('input');
input.setAttribute('type', 'password'); // sets the attribute on the input element




