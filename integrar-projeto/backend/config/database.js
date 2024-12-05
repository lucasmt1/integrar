// backend/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true, // Apenas se o Render exige SSL para conexões externas
      rejectUnauthorized: false,
    },
  },
});

sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco:', err);
  });

module.exports = sequelize;