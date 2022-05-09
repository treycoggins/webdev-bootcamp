// Loops

  // allow us to repeat code
  // there are multiple types
  // -for loops
  // -while loops
  // -for...of loops
  // -for...in loops

 // FOR Loop

 // for (
 //      [initial expression];
 //     [condition];
 //     [incrementExpression]
 //  )

 for (i = 1; i <= 10; i++) {
  // prints numbers 1 to 10
  console.log(i);
}

for (i = 0; i <= 20; i += 2) {
  //prints even numbers 1 to 20
  console.log(i);
}


// Infinite Loops
  // when the condition never evaluates to false, the loop runs forever
  for (let i = 20; i > 0; i++); // i never goes below 0


// Looping over Arrays
  const animals = ['lions', 'tigers', 'bears'];
  
  for (let i = 0; i < animals.length; i++) {
    // prints the elements in order based on the index
    console.log(animals[i]);
  }

  
  // Nested Loops
   // inner loops cycle through all iterations once for every iteration of the outer loop

   for (let i = 1; i <= 10; i++) {
     console.log(`i is ${i}`)
     for (let j = 1; j <= 3; j++) {
       console.log(`    j is ${j}`)
     }
   }

    // a common use of nested for loops is looping over nested arrays

    const seatingChart = [
      ['Kristin', 'Sally', 'David'],
      ['Debra', 'Norman', 'Josh'],
      ['George', 'Cathy', 'Jamie']
    ]

    // in order to print all elements

    for (let i = 0; i < seatingChart.length; i++) {
      let row = seatingChart[i];
      console.log('ROW: ' + (i + 1))
      for (let j = 0; j < row.length; j++) {
        console.log(row[j])
      }
    }
