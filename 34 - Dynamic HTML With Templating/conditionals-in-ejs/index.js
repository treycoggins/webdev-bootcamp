const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.get('/', (req, res) => {
  res.send('YOU GOT ROOT DIRECTORY!');
});

app.get('/random', (req, res) => {
  const rand = Math.floor(Math.random() * 10) + 1;
  // a third way of rendering even/odd in random.ejs
  let isEven = false;
  if (rand % 2 === 0) {
    isEven = true;
  }
  /// see random.ejs (a third way)
  res.render('random', { rand, isEven });
});

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.render('subreddit', { subreddit });


});
app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000!!')
});