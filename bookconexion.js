<<<<<<< HEAD
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('googlebooks', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => console.log('Conectado a MySQL'));

module.exports = sequelize;
=======
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('googlebooks', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => console.log('Conectado a MySQL'));

module.exports = sequelize;
>>>>>>> a56411cd632cb3f91ae0129455d4cd5bf77acfcc
