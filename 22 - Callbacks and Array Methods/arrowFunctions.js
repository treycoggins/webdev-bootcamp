// Arrow Functions
  // a short-hand way of writing functions expressions

  //one parameter - no parentheses required
const square = x => {
  return x * x;
};

// two or more parameters require parentheses
const add = (x, y) => {
  return x + y;
};

// no parameters require empty parentheses
const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};



// Implicit returns
  // only works with one, single expression in the function body 

  // remove the return keyword and enclose function body in parentheses
const rollDie2 = () => (
  Math.floor(Math.random() * 6) + 1
);

  // one-liners don't require parentheses
  const add2 = () => a + b;



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

  // regular function expression
  const favMovies = movies.map(function(movie) {
    return `${movie.title} - ${movie.score}`;
  });

  // arrow function with implicit return
  const favMovies2 = movies.map(movie => (
    `${movie.title} - ${movie.score}`
    ));


    
    // Arrow Functions and the keyword this
      // this behaves very differently in arrow functions

  const person = {
    firstName: 'Tony',
    lastName: 'Hawk',
    fullName: function() {
        // this refers to the 'person' object
        // which is to the left of the method call 'person.fullName'
      return `${this.firstName} ${this.lastName}`;
    }
  };


  const person2 = {
    firstName: 'Tony',
    lastName: 'Hawk',
    fullName: () => {
      // in an arrow function 'this' refers to the window object
      return `${this.firstName} ${this.lastName}`;
    }
  };


  const person3 = {
    firstName: 'Tony',
    lastName: 'Hawk',
      // typically use a regular function expression on object methods instead of arrow functions
    fullName: function() {
      // this refers to the person object here
      return `${this.firstName} ${this.lastName}`;
    },
    shoutName: function() {
      setTimeout(() =>  
      {
        // this refers to the person object here as well, because of execution context where this refers to the scope of the original 'shoutName' function
        console.log(this);
        console.log(this.fullName().toUpperCase());
      }, 2000);
    }
  };