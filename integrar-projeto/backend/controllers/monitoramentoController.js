const MonitoramentoEmocional = require('../models/MonitoramentoEmocional');

exports.criarRegistro = async (req, res) => {
  try {
    const { nivelEstresse, nivelAnsiedade } = req.body;
    const usuarioId = req.usuario.id;

    const registro = await MonitoramentoEmocional.create({
      usuarioId,
      nivelEstresse,
      nivelAnsiedade
    });

    res.status(201).json(registro);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao registrar monitoramento' });
  }
};

exports.listarRegistros = async (req, res) => {
  try {
    const usuarioId = req.usuario.id;
    const registros = await MonitoramentoEmocional.findAll({
      where: { usuarioId },
      order: [['createdAt', 'DESC']]
    });

    res.json(registros);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao listar registros' });
  }
};