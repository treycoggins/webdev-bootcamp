const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));

// Loops in ejs are important. Massive amounts of data can be stored in JSON files and databases, and rendered through looping through that data


app.get('/dogs', (req, res) => {
  const dogs = ['sam', 'bodhi', 'woods', 'charlie', 'emma', 'snooki'];
  res.render('dogs', { dogs : dogs });
});


app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000!!');
});