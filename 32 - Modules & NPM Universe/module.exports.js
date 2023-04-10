const math = require('./math');

// destructuring also works
const { PI, square } = require('./math')


console.log(math);

console.log(math.square(9));
console.log(math.add(8,2))


// destructuring provides access to just the properties and methods
console.log(PI);
console.log(square(4));