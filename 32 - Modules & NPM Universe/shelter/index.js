const sam = require('./sam');
const bodhi = require('./bodhi');
const woods = require('./woods');

const allDogs = [sam, bodhi, woods];

console.log(allDogs);


/// With this export the allDogs object will be available to any file that requires the shelter directory where the index.js file lives.
module.exports = allDogs;

// See shelter.js file in the main directory for this lecture
