const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'sweetshop.sqlite'
});

module.exports = sequelize;
