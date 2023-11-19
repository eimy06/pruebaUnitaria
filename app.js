const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send('Hola Mundo, Eimy L. Figueroa, 2020-9190');
});

app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});

module.exports = app;