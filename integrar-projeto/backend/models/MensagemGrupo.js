// backend/models/MensagemGrupo.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const MensagemGrupo = sequelize.define('MensagemGrupo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  conteudo: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  grupoId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = MensagemGrupo;