// Every value has an inherent truthiness or falsyness 

// Falsy values
  // false
  // '' (empty string)
  // 0
  // undefined
  // NaN

  /* EVERYTHING ELSE IS TRUTHY! */

  const userInput = 0;

  if (userInput) {
    console.log('Truthy!');
  } else {
    console.log('Falsy!');
  } // Falsy!

  // This being the case, you can evaluate a variable without conditions to test if it is falsy, otherwise it is truthy