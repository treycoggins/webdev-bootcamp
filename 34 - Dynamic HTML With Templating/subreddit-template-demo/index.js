const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.get('/', (req, res) => {
  const rand = Math.floor(Math.random() * 10) + 1;
  res.render('home', { rand });
})

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.render('subreddit', { subreddit });
})

app.get('/cats', (req, res) => {
  res.send('YOU GOT CATS DIRECTORY!!');
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000!!");
});