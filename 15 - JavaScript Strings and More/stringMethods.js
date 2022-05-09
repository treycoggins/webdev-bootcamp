/*
String methods are built-in actions we can perform with individual strings
  e.g. Searching within a string, Replacing part of a string, Changing the case of a string

  "string".method()
*/

// toUpperCase()
// changes the case to uppercase
let message = 'leave me alone right now'
message.toUpperCase(); // LEAVE ME ALONE RIGHT NOW

// trim()
// trims the whitespace from the beginning and/or end of a string
let userIput = '   hello, my name is Trey   ';
userInput.trim(); // 'hello my name is Trey'

/* Methods can be chained together: */

let greeting = '           hello again! ';
greeting.trim().toUpperCase(); // 'HELLO AGAIN!'



/* String methods with arguments */
/*********************************/

// indexOf()
  // generates a value of the index where the first occurrence of a substring is found

  let tvShow = 'catdog';

  tvShow.indexOf('cat'); // 0
  tvShow.indexOf('dog'); // 3
  tvShow.indexOf('z');   // -1 (not found)


// slice()
  // slice will extract a portion of a string returned as a new string
  // str.slice(beginIndex[, endIndex])
  // slice with one argument slices from the beginIndex to the end of   the string
  // slice with two arguments slices from the first index up to but not including the second index

  let str = "Hi, my name is Trey";

  str.slice(4) // 'my name is Trey'
  str.slice(4,11) // 'my name'

  // negative number indexes slice from the end of the string

  str.slice(-4) // 'Trey'
  str.slice(-4,-3) // 'T'


// replace()
  // takes two arguments, a substring and a string to replace the substring
  // replace() can be used with regular expressions

  let str = "haha that is so funny";

  str.replace('haha', 'lol');


  // replaceAll()
  // replaces all occurrences of a given string

  str.replaceAll('a', 'e'); // 'hehe thet is so funny'


// repeat()
  // repeats the given string a given number of times

  let str = 'ha';

  str.repeat(3); // 'hahaha'


