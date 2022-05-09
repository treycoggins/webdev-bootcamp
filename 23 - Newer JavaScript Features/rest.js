// Rest operator
  // available inside every function
  // an array-like object
  //  - Has a length property
  //  - Does not have array methods (like push() and pop() )
  // contains all the arguments passed to the function
  // no available inside arrow functions!

function sum() {
  // arguments is not an array, thus array methods can not be used
  console.log(arguments);
}

  // instead use the rest operator
function sum2(...nums) {
  console.log(nums);
}
