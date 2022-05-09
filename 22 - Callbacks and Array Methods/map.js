// Map Method
  // creates a new array with the results of calling a callback on every element in the array

  const numbers = [1,2,3,4,5,6,7,8,9,10,11];

  // double each number in the array
  numbers.map(function(num) {
    num = num * 2;
    console.log(num);
  });

  // map creates a new array
  // [2,4,6,8,10,12,14,16,18,20,22]



  const movies = [
    {
      title: 'Big Daddy',
      score: 88
    },
    {
      title: 'The Color of Money',
      score: 98
    },
    {
      title: 'Vanilla Sky',
      score: 93
    },
    {
      title: 'How High',
      score: 79
    },
    {
      title: 'Identity',
      score: 83
    }
  ];

  // returns a new array of uppercased movie titles
  const titles = movies.map(function(movie) {
    return movie.title.toUpperCase();
  }); 

  