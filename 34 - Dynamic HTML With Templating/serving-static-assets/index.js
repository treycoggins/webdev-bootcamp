const express = require('express');
const app = express();
const path = require('path')
const redditData = require('./data.json');


//app.use runs no matter what the context of the request
//express.static serves the static content in the provided directory, in this case 'public'
app.use(express.static('public')); // This doesn't look for 'public' globally
app.use(express.static(path.join(__dirname, '/public'))); // This does.

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
  res.render('subreddit', { ...data });
  } else {
    res.render('notfound', { subreddit });
  }

});

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000');
});

