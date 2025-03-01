const express = require('express');
const cors = require('cors');
const path = require('path');
const rutas = require('./bookrutas');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas de la API
app.use('/api', rutas);

// Servir el archivo index.html
app.use(express.static(__dirname));

app.get('/', (_, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(8085, () => console.log('Servidor en http://localhost:8085'));