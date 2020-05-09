const Sequelize = require('sequelize');

const sequelize = new Sequelize('shopping', 'root', '_foodie_goody_1sql', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
