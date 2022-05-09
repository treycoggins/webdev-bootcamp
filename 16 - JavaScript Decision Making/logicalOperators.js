// Logial AND (&&)
  // all parts of an expression must be true to evaluate as true

  1 <= 4 && 'a' === 'a'; // true

  9 > 10 && 9 >= 9; // false

  'abc'.length === 3 && 1 + 1 === 4; // false


  const password = prompt('Enter your password: ');

  if (password.length >= 6 && password.indexOf(' ') === -1) {
    // password length is greater or equal to 6 characters AND does not contain a space
    console.log('Valid Password');
  } else {
    console.log('Password Invalid')
  }

// *Short-circuiting: If any part of the expression evaluates to 'false', Javascript doesn't bother looking at the rest of the expression



  // Logial OR (||)
    // any part of the expression must be true to evaluate as true

    1 !== 1 || 10 === 10 // true

    10/2 === 5 || null // true

    0 || undefined // false


    // price of tickets according to age

    const age = 40;

    if (age < 5 || age > 65) {
      console.log('You get in free.');
    } else if (age > 10) {
      console.log('You are an adult. You pay $20');
    } else if (age > 5) {
      console.log('You are a child. You pay $10');
    }

    // AND evaluates at a higher precidence than OR

    const age2 = 1;

    if (age2 >= 0 && age2 < 5 || age2 > 65) {
      console.log('You get in free.');
    } else if (age2 >= 5 && age2 < 10) {
      console.log('You are a child. You pay $10');
    } else if (age2 >= 10) {
      console.log('You are an adult. You pay $20');
    } else {
      console.log('INVALID AGE');
    }


// Logical NOT (!)
    // flips the boolean value of a value or expression

    let firstName = prompt('Enter your first name: ')
      if (!firstName) {
        firstName = prompt('Try Again!');
      }