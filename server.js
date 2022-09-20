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

// Middleware
// app.use((req, res, next) => {
//   next();
// })

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {

  res.redirect('/pokemon');
})

app.get('/pokemon', (req, res) => {
  res.render('Index', {
    pokemon: pokemon
  });
})


app.get('/pokemon/:index', (req, res) => {
  res.render('Show', {
    pokemon: pokemon[req.params.index],
    index: req.params.index,
    max: pokemon.length - 1,
    inverted: false
  });
})

app.get('/poke/new', (req, res) => {
  res.render('New');
});

app.get('/poke/:index/edit', (req, res) => {
  res.render('Edit', {
    pokemon: pokemon[req.params.index], 
    index: req.params.index
  });
}); 

app.post('/poke/:index/edit', (req, res) => {
  console.log(req.body);
  pokemon.splice(req.params.index,1, req.body);
  res.render('Show', {
    pokemon: pokemon[req.params.index],
    index: req.params.index,
    max: pokemon.length - 1,  
    inverted: false
  });
});   

app.post('/pokemon', (req, res) => {
  console.log(req.body);
  pokemon.push(req.body);
  res.render('Index', {
    pokemon: pokemon
  });
});   

 

 




// if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
//     req.body.readyToEat = true;
// } else { //if not checked, req.body.readyToEat is undefined
//     req.body.readyToEat = false;
// }
// fruits.push(req.body);
// res.redirect('/fruits'); //send the user back to /fruits






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