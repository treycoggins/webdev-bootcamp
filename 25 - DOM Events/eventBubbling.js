const eventBubbleButton = document.querySelector('#eventBubbleButton');
const container = document.querySelector('#eventBubbleContainer');

eventBubbleButton.addEventListener('click', function(e) {
   // the problem with this setup is that the hide function gets called when you click the button, which is inside the div. This is event bubbling, and there is a way to interrupt the bubbling process.
  
  // This is accomplished by using an event method called stopPropagation()
  container.style.backgroundColor = makeRandomColor();
  e.stopPropagation();
});

container.addEventListener('click', function() {
  container.classList.toggle('hide');
});




// This function already exists in another .js file in this directory and it can be called from the other file
//         v        v
//         v        v
// const makeRandomColor = () => {
//   let x = Math.floor(Math.random() * 255) + 1;
//   let y = Math.floor(Math.random() * 255) + 1;
//   let z = Math.floor(Math.random() * 255) + 1;
//   return `rgb(${x}, ${y}, ${z})`;
// };