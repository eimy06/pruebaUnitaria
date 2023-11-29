const express = require('express');
const app = express();
const port = 3001;

let server;


app.get('/', (req, res) => {
  res.send('Hola Mundo, Eimy L. Figueroa, 2020-9190');
});

const startServer = () => {
  return new Promise((resolve) => {
    server = app.listen(port, () => {
      console.log(`La aplicación está escuchando en http://localhost:${port}`);
      resolve();
    });
  });
};

const closeServer = () => {
  return new Promise((resolve) => {
    console.log('Cerrando el puerto del servidor');
    server.close(() => {
      console.log('Servidor cerrado.');
      resolve();
    });
  });
};

// Rutas y configuraciones de Express aquí...

beforeAll(async () => {
  await startServer();
});

afterAll(async () => {
  await closeServer();
});

module.exports = app;