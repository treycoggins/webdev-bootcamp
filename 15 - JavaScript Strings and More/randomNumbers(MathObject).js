/*
Math is a built-in object in JavaScript
  contains properties and methods for mathematical constants and functions
*/

Math.PI; // 3.141592653589793

  // rounding a number
Math.round(4.9); // 5

  // absolute value
Math.abs(-456); // 456

  // raise to a power
Math.pow(2,4); // 2^4 = 16

  // removes decimal part
Math.floor(3.999); // 3

  // increases to next integer value
Math.ceil(3.111); // 4

  // square root of a number
Math.sqrt(16); // 4

/* Many methods and properties exist for the Math object */



/* Generating random numbers */

// Math.random() produces a random decimal value between 0 and 1 (non-inclusive)

  // random number between 1 and 10
Math.floor(Math.random() * 10) + 1;

  // random number between 10 and 20
Math.floor(Math.random() * 10) + 10;

  // random number between 20 and 22
Math.floor(Math.random() * 3) + 20;

/* determine the range of values and multiply Math.random by that number, then off-set by adding to that value. Finally, floor the number to remove the decimal part. */