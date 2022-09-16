const express = require("express");

const app = new express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`root`);
})

app.get('/pokemon', (req, res) => {
  res.send(`pokemon index`);
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})