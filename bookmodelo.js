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
