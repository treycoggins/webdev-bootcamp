// Create a game that creates a random number between two given values. Then allow the user to input a guess at the number, and allow the program to decide if that guess is higher or lower than the random number. Output the correct decision (higher or lower) until the number is guessed correctly and display the number of guesses it took to find the number.


let lowLimit = Number(prompt('Input the lower limit:'));
let highLimit = Number(prompt('Input the upper limit:'));
while (!lowLimit || !highLimit) {
  lowLimit = Number(prompt('Input a valid lower limit:'));
  highLimit = Number(prompt('Input a valid upper limit:'));
}
lowLimit = Number(lowLimit);
highLimit = Number(highLimit);
let random = Math.floor(Math.random() * (highLimit - lowLimit) + lowLimit);

let guesses = 0;

  guess = prompt('Enter guess:');
while (guess !== random) {
  
  if (guess === 'q') {
    alert('Ok. Quitting... You made ' + guesses + ' guesses')
      break;
  }

  guesses += 1;
  guess = Number(guess);

  if (guess > random) {
    guess = prompt('You guessed too high. Guess again...');
  } else if (guess < random) {
    guess = prompt('You guessed too low. Guess again...');
  } else alert('You guessed correctly! You made ' + guesses + " guesses.");
  
}
  
