const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = require('./Usuario');
const Grupo = require('./Grupo');
const MensagemGrupo = require('./MensagemGrupo');

const models = {
    Usuario,
    Grupo,
    MensagemGrupo
};


// Configurar associações depois que todos os modelos foram carregados
Object.values(models)
    .filter(model => typeof model.associate === 'function')
    .forEach(model => model.associate(models));

module.exports = models;