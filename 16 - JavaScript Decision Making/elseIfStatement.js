// ELSE-IF STATEMENT

// if not the first thing, maybe this other thing?
// the if-else conditions are linked. Only the first one that evaluates to true will run

const dayOfWeek = 'Saturday';

if (dayOfWeek === 'Monday') {
  console.log('Ugh I hate Mondays');
} else if (dayOfWeek === 'Saturday') {
  // if not the first condition, try the second condition
  console.log('Yay! I love Saturdays!');
} else if (dayOfWeek === 'Friday') {
  // else if statements can be chained together
  console.log('Fridays are decent, especially after work!');
}

// age variable conditional on ticket prices
const age = 8;

if (age < 5) {
  console.log('You are a baby. You get in for free.');
} else if (age < 10) {
  console.log('You are a child. You pay $5');
} else if (age < 65) {
  console.log('You are an not a child or baby. You pay $20');
} // Prints out 'You are a child. You pay $5.



/* ELSE STATEMENT*/

// a catch-all block of code. If nothing else above the else is true, the else clause runs without conditions

const dayOfWeek2 = 'Wednesday';

if (dayOfWeek2 === 'Monday') {
  console.log('Ugh I hate Mondays');
} else if (dayOfWeek2 === 'Saturday') {
  // if not the first condition, try the second condition
  console.log('Yay! I love Saturdays!');
} else if (dayOfWeek2 === 'Friday') {
  // else if statements can be chained together
  console.log('Fridays are decent, especially after work!');
} else {
  console.log('Meh.');
} // Prints out 'Meh.'


const age2 = 69;

if (age2 < 5) {
  console.log('You are a baby. You get in for free.');
} else if (age2 < 10) {
  console.log('You are a child. You pay $5');
} else if (age2 < 65) {
  console.log('You are an not a child or baby. You pay $20');
} else {
  console.log('You are a senior. You pay $10');
}
  // Prints out 'You are a senior. You pay $10'



/* IF, ESLE-IF, and ELSE can be nested inside of one another */

const password = prompt('please enter a new password');

// Password must be 6 or more characters
  if (password.length >= 6) {
    // Password cannot contain a space
    if(password.indexOf(' ') === -1) {
      console.log('Your password is acceptable!');
    } else {
      console.log('Your password contains a space');
    }
  } else {
    console.log('Your password is less than 6 characters');
  }

