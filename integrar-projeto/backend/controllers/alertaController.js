const Alerta = require('../models/Alerta');

exports.getAlertas = async (req, res) => {
  try {
    const alertas = await Alerta.findAll({
      where: { usuarioId: req.usuario.id, lido: false }
    });
    res.json(alertas);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao buscar alertas' });
  }
};

exports.marcarComoLido = async (req, res) => {
  try {
    const { id } = req.params;
    await Alerta.update(
      { lido: true },
      { where: { id, usuarioId: req.usuario.id } }
    );
    res.json({ mensagem: 'Alerta marcado como lido' });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao atualizar alerta' });
  }
};

exports.criarAlerta = async (req, res) => {
  try {
    const { titulo, mensagem, usuarioId, tipo } = req.body;
    const alerta = await Alerta.create({
      titulo,
      mensagem,
      usuarioId,
      tipo
    });
    res.status(201).json(alerta);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao criar alerta' });
  }
};