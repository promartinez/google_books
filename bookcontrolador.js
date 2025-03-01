<<<<<<< HEAD
const Book = require('./bookmodelo');

const listarLibros = async (_, res) => res.json(await Book.findAll());


const crearLibro = async (req, res) => res.json(await Book.create(req.body));


const editarLibro = async (req, res) => {
    await Book.update(req.body, { where: { id: req.params.id } });
    res.json({ mensaje: 'Libro actualizado' });
};


const borrarLibro = async (req, res) => {
    await Book.destroy({ where: { id: req.params.id } });
    res.json({ mensaje: 'Libro eliminado' });
};

module.exports = { listarLibros, crearLibro, editarLibro, borrarLibro };
=======
const Book = require('./bookmodelo');

const listarLibros = async (_, res) => res.json(await Book.findAll());


const crearLibro = async (req, res) => res.json(await Book.create(req.body));


const editarLibro = async (req, res) => {
    await Book.update(req.body, { where: { id: req.params.id } });
    res.json({ mensaje: 'Libro actualizado' });
};


const borrarLibro = async (req, res) => {
    await Book.destroy({ where: { id: req.params.id } });
    res.json({ mensaje: 'Libro eliminado' });
};

module.exports = { listarLibros, crearLibro, editarLibro, borrarLibro };
>>>>>>> a56411cd632cb3f91ae0129455d4cd5bf77acfcc
