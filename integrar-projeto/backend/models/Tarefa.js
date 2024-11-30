const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario');

const Tarefa = sequelize.define('Tarefa', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  pontos: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  completada: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id'
    }
  }
});

Tarefa.belongsTo(Usuario, { foreignKey: 'usuarioId' });
Usuario.hasMany(Tarefa, { foreignKey: 'usuarioId' });

module.exports = Tarefa;