const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario');

const Notification = sequelize.define('Notification', {
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
  lida: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

Notification.belongsTo(Usuario, { foreignKey: 'usuarioId' });
Usuario.hasMany(Notification, { foreignKey: 'usuarioId' });

module.exports = Notification;