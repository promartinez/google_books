const express = require('express');
const { listarLibros, crearLibro, editarLibro, borrarLibro } = require('./bookcontrolador');

const router = express.Router();

router.get('/listar', listarLibros);
router.post('/crear', crearLibro);
router.put('/editar/:id', editarLibro);
router.delete('/borrar/:id', borrarLibro);

module.exports = router;
