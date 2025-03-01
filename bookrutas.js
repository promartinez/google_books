<<<<<<< HEAD
const express = require('express');
const { listarLibros, crearLibro, editarLibro, borrarLibro } = require('./bookcontrolador');

const router = express.Router();

router.get('/listar', listarLibros);
router.post('/crear', crearLibro);
router.put('/editar/:id', editarLibro);
router.delete('/borrar/:id', borrarLibro);

module.exports = router;
=======
const express = require('express');
const { listarLibros, crearLibro, editarLibro, borrarLibro } = require('./bookcontrolador');

const router = express.Router();

router.get('/listar', listarLibros);
router.post('/crear', crearLibro);
router.put('/editar/:id', editarLibro);
router.delete('/borrar/:id', borrarLibro);

module.exports = router;
>>>>>>> a56411cd632cb3f91ae0129455d4cd5bf77acfcc
