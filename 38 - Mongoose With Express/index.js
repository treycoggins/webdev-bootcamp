const express = require('express');
const res = require('express/lib/response');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
  res.send('WOOF!');
})


app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`)
})