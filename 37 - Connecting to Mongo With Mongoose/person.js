const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log('CONNECTION OPEN!')
})
.catch(err => {
  console.log("OH NO, ERROR!");
  console.log(err)
});


/// Mongo Virtuals


const personSchema = new mongoose.Schema({
  first: String,
  last: String  
})


// Virtuals will behave as if it were an actual property on the personSchema
personSchema.virtual('fullName').get(function () {
  return `${this.first} ${this.last}`;
});




/// Middleware
  // middleware functions are executed one after another, when each middleware calls next()

// schema.pre('save', function (next) {

//   next();
// })

//   // alternatively, you can use a function that returns a promise and use async/await

// schema.pre('save', function () {
//   return doStuff()
//   .then( () => doMoreStuff());
// })

//   // or, in Node.js >= 7.6.0
//   schema.pre('save', async function () {
//     await doStuff();
//     await doMoreStuff();
//   })

// Both options are to ensure that the code runs in the middle of something, and then something continues to run after it


personSchema.pre('save', async function () {
  this.first = 'YO';
  this.last = 'MAMA';
  console.log('ABOUT TO SAVE!!');
})

personSchema.post('save', async function () {
  console.log('JUST SAVED!!');
})



const Person = mongoose.model('Person', personSchema);
