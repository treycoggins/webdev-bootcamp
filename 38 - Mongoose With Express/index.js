const express = require('express');
const res = require('express/lib/response');
const { default: mongoose } = require('mongoose');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27107/farmStand', {useNewParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('MONGO CONNECTION OPEN!');
  })
  .catch(err => {
    console.log('OH NO, MONGO CONNECTION ERROR!')
  });



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
  res.send('WOOF!');
})


app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`)
})