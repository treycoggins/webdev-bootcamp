// Spread Operator
  // spread allows an iterable to be expanded in places where arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded where key-value pairs are expected

const arr = require("jshint/data/non-ascii-identifier-start");

// Spreading an array literal
const nums = Math.max(13,2,5,30,83,40,0,1002);
  // what if the numbers are in an array?
const numsArray = [13,2,5,30,83,40,0,1002];
Math.max(numsArray); // returns NaN
  // use spread operator
Math.max(...numsArray);
Math.min(...nums);

  // Spreading a string
console.log(...'My String'); // returns characters separated by spaces

  // copying arrays
const threeNums = [1, 2, 3];
const copy = [...threeNums];
  // combining arrays
const furryPets = ['cat', 'dog', 'mouse'];
const slimyPets = ['lizard', 'snake', 'turtle'];
const allPets = [...furryPets, ...slimyPets];


// Spread with objects
  // copies properties from one object to another object literal

const feline = { legs: 4, family: 'Felidae'};
const canine = {  isFurry: true, family: 'Caninae'};
  // copying and adding properties
const felineCopy = {...feline, color: 'black'};
  // combining objects
const catDog = {...feline, ...canine};
  // when object properties conflict (as in 'family') the last one in the expression 'wins' 

  // when spreading an array into an object the index is used as the key
const animals = {...['cat', 'dog', 'bird']}; // {0: 'cat', 1: 'dog', 2: 'bird'}
  // why spread an array into an object?
const dataFromForm = {
  email: 'blueman@gmail.com',
  password: 'tobias123!',
  username: 'tfunke'
};
const newUser = { ...dataFromForm, id: 23456, isAdmin: false };
  // adds additional values to given object data
