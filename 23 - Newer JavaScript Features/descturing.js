// Destructuring Arrays
  // a short, clean syntax to 'unpack':
  //  -values from arrays
  //  -properties from objects, into distinct variables

const pinballScores = [99238, 84039, 72038, 58382, 33028];
  // the variable names are assigned to the first and second values from the array
const [gold, silver] = pinballScores;
  // the rest operator can be used
const [first, second, ...everyoneElse] = pinballScores;


// Destructuring Objects
  // more commonly used to extract values from objects

const user = {
  email: 'harvey@gmail.com',
  password: 'sCoTt1948sMiTh',
  firstName: 'Harvey',
  lastName: 'Milk',
  born: 1930,
  died: 1978,
  bio: 'Harvey Bernard Milk was an American politician',
  city: 'San Francisco',
  state: 'California'
};
  // needing to extract properties as variables, I could do this:
    const firstName = user.firstName;
    const lastName = user.lastName;
  // but this gets very redundant

  // instead 'unpack' using destructuring - order doesn't matter like arrays
  // it is possible to rename the variables with a colon
  const { email, firstName: fname, lastName: lname, bio } = user;
  const { born: birthYear, died: deathYear } = user;

  // it is possible to use default params

  const user2 = {
    email: 'stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
  };

  const { city, state, died = 'N/A'} = user2;



// Desctructuring Parameters
  // when declaring functions (typically within objects) we can destructure the parameters being passed in

  // using object dot syntax
function fullName(user) {
  return `${user.firstName} ${user.lastName}`;
};
  // destructuring the object properties
  // can do this...
function fullName(user) {
  const {firstName, lastName} = user;
  return `${firstName} ${lastName}`;
};

  // ...or destructure on the way into the function
function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
fullName(user2); // 'Stacy Gonzalez'

  // can also use default params if the property doesn't exist on the object
  function fullName({ firstName, lastName, age = 20 }) {
    return `${firstName} ${lastName} is ${age} years old.`;
  }
  fullName(user2); // 'Stacy Gonzalez is 20 years old.'


