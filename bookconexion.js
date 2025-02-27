const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('googlebooks', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => console.log('Conectado a MySQL'));

module.exports = sequelize;
