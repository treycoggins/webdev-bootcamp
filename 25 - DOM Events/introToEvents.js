// Events (3 types)
  // running code when certain actions are taken by the user
  // e.g. clicks, drags, drops, hovers, scrolls, form submission, key presses,focus/blur, mousewheel, double click, copying, pasting, audio start, screen resize, printing

  // #1 inline events
    // out of date and not really used
    // applied directly in the html

  // <button onclick="alert('You clicked me')">Click me</button>

  // #2 events applied directly to the element in JS
const btn = document.querySelector('#v2');
  // console.dir(btn) shows various events beginning with 'on'
  // these events can be set to a function which is fired when the event is triggered

// btn.onclick = function() {
//   console.log('You clicked me');
//   console.log('I hope it works');
// };

   // a function can be defined and then assigned to an event
function scream() {
  console.log('AHHH!');
  console.log('Stop touching me!');
}
  // in this case we are not invoking the function
  // we are setting a property on the element object to be a function
btn.onmouseenter = scream;


  // #3 Event Listeners
    // specify the event type and a callback function to run
  const button = document.querySelector('#v1');
  button.addEventListener('click', () => {
    alert('You clicked me!!');
  });

  const button2 = document.querySelector('#v2');
  button2.addEventListener('dblclick', function() {
    alert('You double clicked me!!');
  });

    // can also pass in a named function
  const button3 = document.querySelector('#v3');
  button3.addEventListener('click', scream);

    // addEventListener can also fire more than one event at a time
    // event listeners can also be removed for performance sake
  