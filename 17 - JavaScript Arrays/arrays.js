// Arrays are a data structure or a collection of information

const theBeatles = ['John', 'Paul', 'George', 'Ringo'];

  // To make an empty array
  const grades = [];

  // An array of strings
  const directions = ['left', 'right', 'up', 'down'];

  // An array of numbers
  const lottoNumbers = [3, 18, 29, 40, 59];

  // Arrays can also be mixed with types
  const stuff = [NaN, 'orange', myVariable, 30, null, false, undefined];

  // Arrays can also contain other arrays
  const twoDimensionalArray = [[3,4], [5,6], [7,8]];

    // to access the inner array
  twoDimensionalArray[2][0]; // 7


// Accessing and Modifying values in arrays
  /* Arrays are ordered and indexed */

  // Each element in the array has a corresponding index starting at 0

  // To access an array use [] with the index

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  days[3]; // 'Thursday'
  days[10]; // undefined

  // Indexes can be used to modify an array

  let colors = ['rad', 'orange', 'yallow'];
  colors[0] = 'red';
  colors[2] = 'yellow'; // ['red', 'orange', 'yellow']

  // modifying an index beyond the length of the array creates undefined values

  colors[4] = 'green'; // ['red', 'orange', 'yellow', undefined, 'green']

  