const shelterForm = document.querySelector('#shelterForm');
// Use preventDefault on the event object!

// shelterForm.addEventListener('submit', function (e3) {
//   e3.preventDefault();
//   console.log('SUBMITTED!');
// });


  // how to extract the data from the form submission

// const catNameInput = document.querySelector('#catName');
// shelterForm.addEventListener('submit', function (e3) {
//   e3.preventDefault();
//   console.log(catNameInput.value);
// });

  // how to add the data to a list

const catNameInput = document.querySelector('#catName');
const list = document.querySelector('#catsList');
shelterForm.addEventListener('submit', function (e3) {
  e3.preventDefault();
  const catName = catNameInput.value;
  const newLI = document.createElement('li');
  newLI.innerText = catName;
  console.log(newLI);
  list.append(newLI);
  catNameInput.value = '';
});