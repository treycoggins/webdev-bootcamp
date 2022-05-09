// Introduction to Functions
  // resuable procedures (code)
  // allow us to write modular code
  // we define a "chunk" of code to execute at a later time

  // rolling one die 3 times
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
  let die3 = Math.floor(Math.random() * 6) + 1;

  // roll a die anytime
  function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
  }
  rollDie(); // execute the function


// Arguments
  // arguments are inputs to a function

  // a function that accepts an argument to change the number of sides of the die
function rollVariableDie(sides) {
  let roll = Math.floor(Math.random() * sides) + 1;
  console.log(roll);
}
rollVariableDie(12); // prints a random number between 1 and 12


  // functions can have multiple arguments
  function greet(firstName, lastName) {
      console.log(`Hey there, ${firstName} ${lastName}`);
  }
  greet('Mick', 'Jagger'); // Prints 'Hey there, Mick Jagger
  
  function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
      result += str;
    }
    console.log(result);
  }
  repeat($, 6); // Prints '$$$$$$'
    // functions can have two or more parameters
    // order matters, the first parameter will correspond to the first argument passed in


// The RETURN keyword
  // so far our functions only print the result. The return keyword can output a value created inside the variable so that it can be captured into a variable

  function add(x, y) {
    return x + y;
  }
  sum = add(5, 3); // returns 8

  // return ends the computation of a function
  // can only return 1 thing (one value)
  // conditional statements can decide which value to return, but only one value can be returned


  



