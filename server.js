const express = require("express");
const pokemon = require("./models/pokemon.js");
const engine = require('express-react-views');

const app = new express();
const PORT = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
  res.render('Index.jsx');
})

app.get('/pokemon', (req, res) => {
  res.render('Index.jsx');
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})