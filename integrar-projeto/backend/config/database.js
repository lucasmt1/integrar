// backend/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco:', err);
  });

module.exports = sequelize;