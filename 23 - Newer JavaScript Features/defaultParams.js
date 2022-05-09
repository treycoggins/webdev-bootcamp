// Default Params
  // parameters are sometimes optional, and when they are we may want to provide a default value

  function rollDie(numSides) {
      // the old way
      if(numSides === undefined) {
        numSides = 6;
      }
    return Math.floor(Math.random() * numSides) + 1;
  }

      // the new way
  function rollDieNew(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
  }


    // default param for msg, but should come after required params
  function greet(person, msg = 'Hey', question = 'How are you?') {
    console.log(`${msg}, ${person}! ${question}`);
  }

  greet('Jack', 'Howdy'); // prints "Howdy, Jack! How are you?"

    // use 'undefined' to skip over a default param without adding a custom value

    greet('Jack', undefined, 'You good?');