const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario');

const Alerta = sequelize.define('Alerta', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mensagem: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id'
    }
  },
  lido: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  tipo: {
    type: DataTypes.ENUM('info', 'warning', 'error'),
    defaultValue: 'info'
  }
});

Alerta.belongsTo(Usuario, { foreignKey: 'usuarioId' });
Usuario.hasMany(Alerta, { foreignKey: 'usuarioId' });

module.exports = Alerta;