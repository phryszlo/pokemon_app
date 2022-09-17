const express = require("express");
const pokemon = require("./models/pokemon.js");
const engine = require('express-react-views');
const path = require('path');

const app = new express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
  res.render('Index', {
    pokemon: pokemon
  });
})

app.get('/pokemon', (req, res) => {
  res.render('Index');
})


app.get('/pokemon/:index', (req, res) => {
  res.render('Show', {
    pokemon: pokemon[req.params.index],
    index: req.params.index,
    max: pokemon.length - 1,
    inverted: false
  });
})

// these routes conflict
// app.get('/pokemon/:name', (req, res) => {
//   let poke = pokemon.find(p => p.name === req.params.name)
//   console.log(poke.name);
//   res.render('Show', {
//     pokemon: poke
//   });
// })


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})