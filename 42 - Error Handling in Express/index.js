const express = require('express');
const res = require('express/lib/response');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError');

app.use(morgan('common'));
app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  return next();
});

app.use('/dogs', (req, res, next) => {
  console.log('I LOVE DOGS!');
  next();
})

// // Middleware runs on every single request, using next to continue the chain
// // After middleware runs the flow continues and the request may match something below

// app.use(morgan('common'));
// app.use((req, res, next) => {
//   console.log("THIS IS MY FIRST MIDDLEWARE!!")
//   next();
//   // Code below next will still run, but after the middleware completely runs, but is not a common practice.
//   console.log('THIS CODE RUNS AFTER MIDDLEWARE')
// });
// app.use((req, res, next) => {
// console.log('THIS IS MY SECOND MIDDLEWARE!!')
// // Typically we will return next.
// return next();
// });


// Example of a middleware. Using a query string is NOT a form of authentication

//  app.use((req, res, next) => {
//   const { password } = req.query
//   if (password === 'chickennugget') {
//     next();
//   }
//   res.send('SORRY YOU NEED A PASSWORD!');
//  });

 const verifyPassword = (req, res) => {
  const { password } = req.query
  if (password === 'chickennugget') {
    next();
  }
  throw new AppError('password required', 401);
  // res.send('SORRY YOU NEED A PASSWORD!');
 };


app.get('/', (req, res) => {
  console.log(`Request Date: ${req.requestTime}`);
  res.send('HOME PAGE')
});

app.get('/dogs', (req, res) => {
  console.log(`Request Date: ${req.requestTime}`);
  res.send('WOOF WOOF')
});


// Routes can have more than one callback, for instance verifyPassword in this case
app.get('/secret', verifyPassword, (req, res)=> {
  res.send('MY SECRET IS: Sometimes I wear headphones in public so I don\'t have to talk to anyone')
});


// Use middleware to setup a 404 Route
app.use((req, res) => {
  res.status(404).send('NOT FOUND!');
})


app.listen(3000, () => {
  console.log('App is listening on localhost:3000');
});