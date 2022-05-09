// FOR...OF Loop
  // easy way of iterating over arrays and other iterables

  const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer'];

  // iterating over subreddits with a for loop
  for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
  }

  // iterating over subreddits with a for...of loop
  for (let sub of subreddits) {
    // a variable is created to store each element throughout the iteration
    console.log(sub);
    console.log(`Visit reddit.com/r/${sub}`);
  }


  // Seating chart example
  const seatingChart = [
    ['Kristin', 'Sally', 'David'],
    ['Debra', 'Norman', 'Josh'],
    ['George', 'Cathy', 'Jamie']
  ];

  // using a for loop
  for (let i = 0; i < seatingChart.length; i++) {
    let row = seatingChart[i];
    console.log('ROW: ' + (i + 1))
    for (let j = 0; j < row.length; j++) {
      console.log(row[j]);
    }
  }

  // using a for...of loop'
  for (let row of seatingChart) {
    for(let student of row) {
      console.log(student);
    }
  }


// for...of can also iterate over strings and other iterable objects
for (let char of 'hello world') {
  console.log(char);
}

