// Function Scope
  // variable 'visibility'
  // location where a variable is defined dictates where we have access to that variable

function collectEggs() {
  let totalEggs = 6;
  // totalEggs is accessible inside the function
  console.log(totalEggs);
}

function collectEggs() {
  let totalEggs = 6;
}
// totalEggs is defined in the function and not accessible outside the function
console.log(totalEggs);


collectEggs();
// running the function doesn't give access to the variable oustide  
console.log(totalEggs);


let totalEggs2 = 0; // global variable
function collectEggs() {
  totalEggs2 = 6; // functions can see and modify global variables
  // this practice is not common, usually functions use their own internal variables
}

let bird = 'Scarlet Macaw';
function birdWatch() {
  let bird = 'Great Blue Heron';
  console.log(bird); // prints 'Great Blue Heron' because it's in the function scope
}
console.log(bird) // prints 'Scarlet Macaw' because it's outside the function scope