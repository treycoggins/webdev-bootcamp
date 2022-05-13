let guessed = false;
let randomNum = Math.floor(Math.random() * 1000) + 1;


while (!guessed) {
  let guess = parseInt(prompt("Enter your guess:"));
  while (!guess) {
    alert("Please enter a valid number...");
    guess = parseInt(prompt("Enter your guess:"));
  }
  if (guess > randomNum) {
    alert("You guessed too high! Guess again.");
  } else if (guess < randomNum) {
    alert("You guessed too low! Guess again.");
  } else if (guess == 'q') {
    alert(`The secret number was ${randomNum}.`);
  } else {
    guessed = true;
    alert(`You guessed the number! It was ${randomNum}`);
  }
  
}