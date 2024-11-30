const Usuario = require('../models/Usuario');

exports.getProfile = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.usuario.id, {
      attributes: ['id', 'nome', 'email', 'tipo_usuario']
    });
    res.json(usuario);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao buscar perfil' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { nome } = req.body;
    await Usuario.update(
      { nome },
      { where: { id: req.usuario.id } }
    );
    res.json({ mensagem: 'Perfil atualizado com sucesso' });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao atualizar perfil' });
  }
};