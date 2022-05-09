const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

btn.addEventListener('click', () => {
  const randomColor = makeRandomColor();
  document.body.style.backgroundColor = randomColor;
  h1.innerText = randomColor;
});


const makeRandomColor = () => {
  let x = Math.floor(Math.random() * 255) + 1;
  let y = Math.floor(Math.random() * 255) + 1;
  let z = Math.floor(Math.random() * 255) + 1;
  return `rgb(${x}, ${y}, ${z})`;
};