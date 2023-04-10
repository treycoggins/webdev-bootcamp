const express = require('express');
const app = express();

const path = require('path');

app.set('view engine', 'ejs');
// line below sets the target directory as the cwd + /views
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  // don't need to add /views or .ejs because default location is /views and default extension when app.set is 'ejs' is .ejs  
  res.render("home"); 
})


app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000!")
});