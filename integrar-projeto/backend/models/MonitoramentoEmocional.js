const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario');

const MonitoramentoEmocional = sequelize.define('MonitoramentoEmocional', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: 'id'
    }
  },
  nivelEstresse: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 10
    }
  },
  nivelAnsiedade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 10
    }
  }
}, {
  tableName: 'monitoramento_emocional',
  timestamps: true
});

// Relacionamento com Usuário
MonitoramentoEmocional.belongsTo(Usuario, { foreignKey: 'usuarioId' });
Usuario.hasMany(MonitoramentoEmocional, { foreignKey: 'usuarioId' });

module.exports = MonitoramentoEmocional;