// Array Methods

  // many methods (actions) which can be performed on arrays exist

let movieLine = ['tom', 'nancy']

/* push & pop */
movieLine.push('pablo') // ['tom', 'nancy', 'pablo']
movieLine.push('ted', 'sal') // ['tom', 'nancy', 'pablo', 'ted', 'sal']

    /* unlike strings, array methods change the original array */

let person = movieLine.pop(); // removes the last value from the end array and returns it
// this value can be captured in a variable
// person = 'sal'
// movieLine = ['tom', 'nancy', 'pablo', 'ted'] 



/* shift & unshift */
let person2 = movieLine.shift(); // removes the first value from the beginning of an array and returns it
// this value can be captured in a variable
// person2 = 'tom'
// movieLine = ['nancy', 'pablo', 'ted']

movieLine.unshift('bob'); // adds a value to the beginning of the array
// movieLine = ['bob', 'nancy', 'pablo', 'ted']



/* concat */
  // combine arrays
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2); // ['a', 'b', 'c', 'd', 'e', 'f']


/* includes */
  // returns a boolean if the array contains the passed value
array3.includes('z'); // false


/* indexOf */
  // returns the value of the index of the first value found in an array
array3.indexOf('b'); // 1
array3.indexOf('z') // -1


/* reverse */
  // reverses the order of the array. is a destructive method which changes the original array.
array1.reverse(); // array1 = ['c', 'b', 'a']


/* slice */
  // arr.slice(beginningIndex[, endingIndex])
const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
const coolColors = colors.slice(3); // ['green', 'blue']
const warmColors = colors.slice(0,3); // ['red', 'yellow', 'orange']
colors.slice(-2); ['green', 'blue'];


/* splice */
  // changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
  // array.splice(startIndex[, deleteCount[, item1[, item2[, ...]]]])
  // is destructive to the original array
const months = ['jan', 'march', 'april', 'june'];
months.splice(1, 0, 'feb'); // inserts 'feb' in the first index and removes 0 elements
  // ['jan', 'feb', 'march', 'april', 'june']
months.splice(4, 1, 'may'); // inserts 'may' in the fourth index and removes 1 element following the insert
  // ['jan', 'feb', 'march', 'april', 'may']

  // values removed can be captured in variables




