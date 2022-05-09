// For Each Method
  // accepts a callback function
  // call the function once per element in an array

const numbers = [1,2,3,4,5,6,7,8,9,10,11];
function print(element) {
  console.log(element);
}
numbers.forEach(print); // prints all the elements

// it is rare to use a custom function as a call back
// typically the call back is an anonymous in-line function
numbers.forEach(function (el) {
  if (el % 2) {
  console.log(el);
  }
});



const movies = [
  {
    title: 'Big Daddy',
    score: 88
  },
  {
    title: 'The Color of Money',
    score: 98
  },
  {
    title: 'Vanilla Sky',
    score: 93
  },
  {
    title: 'How High',
    score: 79
  },
  {
    title: 'Identity',
    score: 83
  }
];

movies.forEach(function (movie) { 
  // pass in a parameter (movie) to represent each element of the array
  console.log(`${movie.title} - ${movie.score}/100`);
});