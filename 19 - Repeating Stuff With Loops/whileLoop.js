// WHILE Loop
  // initialization occurs before the loop
  // incrementExpression occurs in the codeblock
  // typically used when the number of iterations is unknown

  let count = 0;
  while (count < 10) {
    console.log(count);
    count++;
  }

  const SECRET = 'BabyHippo';
  let guess = prompt('enter the secret code: ');

  while (guess != SECRET) {
    guess = prompt('enter the secret code: ');
  }

  alert('Congratulations! You got the secret code!');


// break keyword
  // when a break keyword is reached the loop automatically ends and program flow continues after the loop

  let input = prompt('Say something: ')
  while(true) {
    input = prompt(input);
    if (input.toLowerCase() === 'password') break; // {} are not required for one-line if statements
  }
  alert('You entered password!')




d