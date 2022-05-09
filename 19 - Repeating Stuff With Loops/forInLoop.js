// Iterating over Objects
  // object literals are not considered iterables
  // for...of cannot iterate over object literals
  // for...in can iterate over object literal KEYS

const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 83,
  nadia: 77,
  elvira: 97,
  diedre: 81,
  vonnie: 60
};


for (let person in testScores) {
  console.log(person); // a list of keys (names of students)
}

for (let person in testScores) {
  //testScores[person] returns the value for the key passed to an object
  console.log(`${person} scored testScores[person].`);
}

// methods for object literals
Object.keys(testScores); // returns an array of keys
Object.values(testScores); // returns an array of values
Object.entries(testScores); // returns a nested array of key/value pairs, each pair an array within an array


// collecting the values to average testScores
let total;
for (let score of Object.values(testScores)) {
  total += score; // returns the total of the values of the object
  console.log(total);
}

// objects do not have a length property
// in order to average the values in testScores store the array returned by Object.values into a variable and use the length property of that variable, which is an array
let total2;
let scores = Object.values(testScores);
for (let score of Object.values(testScores)) {
  total += score;
}
console.log(total / scores.length); // displays the average of testScore values

