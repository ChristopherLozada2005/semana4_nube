const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Arriba Alianza toda la vida!');
});

app.get('/clientes', (req, res) => {
  res.json([
    { id: 1, nombre: 'Christopher' },
    { id: 2, nombre: 'Antonio' },
    { id: 3, nombre: 'Jorge' }
  ]);
});

app.get('/productos', (req, res) => {
  res.json([
    { id: 1, nombre: 'Producto 1' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' }
  ]);
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
