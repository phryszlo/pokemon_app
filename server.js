const express = require("express");
const pokemon = require("./models/pokemon.js")

const app = new express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`root`);
})

app.get('/pokemon', (req, res) => {
  res.send(pokemon);
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})