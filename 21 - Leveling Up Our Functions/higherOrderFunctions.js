// Higher Order Functions
  // functions that operate on/with other functions
  // they can: 1. Accept other functions as arguments
  //           2. Return a function

let greet = function() {console.log('Hi!');};
// functions are just a value that can be stored and passed around

// functions can also be passed as an argument
function callTwice(func) {
  // func is just a variable holding a function
  func();
  func();
}
callTwice(greet); // prints 'Hi! Hi!'



function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}
function callTenTimes(f) {
  for (let i = 0; i < 10; i++) {
    f();
  }
}
callTenTimes(rollDie); // prints the dice roll ten times