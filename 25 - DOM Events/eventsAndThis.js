const makeRandomColor = () => {
  let x = Math.floor(Math.random() * 255) + 1;
  let y = Math.floor(Math.random() * 255) + 1;
  let z = Math.floor(Math.random() * 255) + 1;
  return `rgb(${x}, ${y}, ${z})`;
};

const buttons = document.getElementsByClassName('btn');

for (let button of buttons) {
  button.addEventListener('click', colorize);
}

const h1s = document.querySelectorAll('h3');

for (let h1 of h1s) {
  h1.addEventListener('click', colorize);
}
  // The keyword 'this' will refer to the element when used in the function
function colorize() {
  this.style.backgroundColor = makeRandomColor();
  this.style.color = makeRandomColor();
}