const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');
// console.log(redditData);

app.set('view engine', 'ejs');
// this sets the views path from anywhere in the filesystem with path.join(__dirname)/views
app.set('views', path.join(__dirname, '/views'));


//:<variable>
app.get('/r/:subreddit', (req, res) => {
  // variable name extracted from request.params
  const { subreddit } = req.params;
  //.json file with the key equal to the param passed in
  const data = redditData[subreddit];
  // console.log(data);
  if (data) {
    //data spread to provide access to properties of 'data' in the .ejs file
  res.render('subreddit', { ...data });
  } else {
    res.render('notfound', { subreddit });
  }
})


app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000');
})