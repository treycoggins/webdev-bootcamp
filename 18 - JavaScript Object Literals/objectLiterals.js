// Objects

  // Objects are a collection of properties
  // Properties are key-value pairs
  // Rather than using an index, we access data using custom keys

const fitBitData = {
  totalSteps:     308727,
  totalMiles:     211.7,
  avgCalorieBurn: 5775,
  workoutsThisWeek: '5 of 7',
  avgGoodSleep:   '2:13',
};
  // order doesn't matter
  // all types are able to be used as values

  // access data from objects using dot notation or ['key']
  const person = {firstName: 'Mick', lastName: 'Jagger'}
  person['firstname']; // 'Mick'
  person['lastName']; // 'Jagger'
  person.firstName; // 'Mick'
  person.lastName; // 'Jagger'

  // all keys are converted to strings (except for symbols)
  const years = {1999: 'GOOD', 2020: 'BAD', true: 'dat', null: 'abc'}
  years[1999]; // 'GOOD'
  years['1999']; // Also 'GOOD'

  // using square brackets allows there to be an expression to be evaluated as a key
  let birthYear = 1999;
  years.birthYear; // NOT valid, no birthYear key in years
  years[birthYear] // valid, returns the value of the evaluated birthYear


  // modifying objects
  const midterms = {dan: 94, john: 84, thomas: 79};
  midterms.thomas = 80; // updates the key's value
  midterms.sally = 91; // creates a new key-value pair


  // arrays and objects
    // the combination of the two are very powerful

    const comments = [
      { username: 'Tammy', text: 'lol', votes: 9 },
      { username: 'FishBoi', text: 'glub', votes: 123 }
      ]

      // to access the text from FishBoi
        comments[1].text; // 'glub'





