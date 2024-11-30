const Usuario = require('./Usuario');
const Grupo = require('./Grupo');
const DiarioRegistro = require('./DiarioRegistro');
const Objetivo = require('./Objetivo');
const Mensagem = require('./Mensagem');

// Relacionamentos
Usuario.hasMany(DiarioRegistro);
DiarioRegistro.belongsTo(Usuario);

Usuario.hasMany(Objetivo);
Objetivo.belongsTo(Usuario);

// Relacionamentos de Grupos
Usuario.belongsToMany(Grupo, { through: 'UsuarioGrupo' });
Grupo.belongsToMany(Usuario, { through: 'UsuarioGrupo' });

// Mensagens em Grupos
Grupo.hasMany(Mensagem);
Mensagem.belongsTo(Grupo);
Usuario.hasMany(Mensagem);
Mensagem.belongsTo(Usuario);