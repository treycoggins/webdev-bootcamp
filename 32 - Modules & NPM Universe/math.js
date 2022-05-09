const add = (x,y) => x + y;

const PI = 3.14159;

const square = x => x * x;

/// require() will only pass information that has been explicitly defined in the module.exports object

module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;


// The object can be defined in this file and imported to module.exports all at once

const math = {
  add: add,
  PI: PI,
  square: square
}

module.exports = math;


// properties and methods can also be chained onto module.exports

module.exports.add = (x,y) => x + y;
module.exports.PI = 3.14159;
module.exports.square = x => x * x;


// module.exports can be shortened to exports provided exports isn't used elsewhere as a variable name, then it is no longer bound to module.exports

exports.add = (x,y) => x + y;