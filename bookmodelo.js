<<<<<<< HEAD
const { DataTypes } = require('sequelize');
const sequelize = require('./bookconexion');

const Book = sequelize.define('Book', {
    titulo: { type: DataTypes.STRING, allowNull: false },
    autor: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.TEXT },
    imagen: { type: DataTypes.STRING },
    publicado: { type: DataTypes.STRING }
});

sequelize.sync();

module.exports = Book;
=======
const { DataTypes } = require('sequelize');
const sequelize = require('./bookconexion');

const Book = sequelize.define('Book', {
    titulo: { type: DataTypes.STRING, allowNull: false },
    autor: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.TEXT },
    imagen: { type: DataTypes.STRING },
    publicado: { type: DataTypes.STRING }
});

sequelize.sync();

module.exports = Book;
>>>>>>> a56411cd632cb3f91ae0129455d4cd5bf77acfcc
