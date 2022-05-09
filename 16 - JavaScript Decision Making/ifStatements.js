let rating = '3';

if (rating === 3) {
  console.log('BEFORE CONDITIONAL!');
// the code in the 'if' codeblock only runs if the condition is true
} 

if (1 + 1 === 2) {
  console.log('MATH STILL WORKS');
}

console.log('AFTER CONDITIONAL'); // this runs anyway

let random = Math.random();

if (random < 0.5) {
  console.log('YOUR NUMBER IS LESS THAN 0.5');
  console.log('Your number was ' + random);
}

if (random > 0.5) {
  console.log('YOUR NUMBER IS GREATER THAN 0.5!');
  console.log('Your number was ' + random);
}

