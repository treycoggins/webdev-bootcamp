const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.get('/', (req, res) => {
  res.render('home');
  // res.send('YOU GOT ROOT DIRECTORY!!');
});

app.get('/random', (req, res) => {
  // This generates the random number to be passed through to the template:
  const random = Math.floor(Math.random() * 10) + 1;
  // The random variable is passed through res.render as an object and referenced by the key in the template:
  res.render('random', {rand: random});
});


app.get('/cats', (req, res) => {
  res.send('YOU GOT CATS DIRECTORY!');
});

app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000!!!')
});