// 'evt' is an event object that is always passed in to every event handler
// contains information about the object

const btn2 = document.querySelector('#button2');
  btn2.addEventListener('click', function(evt) {
    console.log(evt);
});

// information in the event object can be used to create event listeners,  especially with key presses
const input = document.querySelector('input');
input.addEventListener('keydown', function(e) {
  console.log(e);
  console.log('KeyDown');
  // opening the Keyboard Event in inspector, we're focused on 'code' and 'key'
  console.log(e.key); // the actual letter or character
  console.log(e.code); // the position/location of the key
});
// input.addEventListener('keyup', function() {
//   console.log('KeyUp');
// });


// to listen globally to key presses, bind the event listener the window object
window.addEventListener('keydown', function(e2) {
  console.log(e2.key);
  switch(e2.code) {
    case 'ArrowUp':
      console.log('UP!');
      break;
    case 'ArrowDown':
      console.log('DOWN!');
      break;
    case 'ArrowRight':
      console.log('RIGHT!');
      break;
    case 'ArrowLeft':
      console.log('LEFT!');
      break;
    default:
      console.log('ignored.')
  }
});

