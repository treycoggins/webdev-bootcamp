const changeEventInput = document.querySelector('#changeEventInput');
const changeEventHeading = document.querySelector('#changeEventHeading')
changeEventInput.addEventListener('change', function(e) {
  // change input only fires when you blur the input (clicking or tabbing away from that input field)
  console.log('input changed!');
});

// input event fires when values in the input field change, but does not include arrow keys, shift, esc, etc. that do not change the value
changeEventInput.addEventListener('input', function(e) {
  // console.log('Input Event!');
  changeEventHeading.innerText = changeEventInput.value;
});