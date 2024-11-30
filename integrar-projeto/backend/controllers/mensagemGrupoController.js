const MensagemGrupo = require('../models/MensagemGrupo');
const Usuario = require('../models/Usuario');

exports.listarMensagens = async (req, res) => {
  try {
    const { grupoId } = req.params;
    const mensagens = await MensagemGrupo.findAll({
      where: { grupoId },
      include: [{
        model: Usuario,
        attributes: ['id', 'nome']
      }],
      order: [['createdAt', 'ASC']]
    });
    res.json(mensagens);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao listar mensagens' });
  }
};

exports.enviarMensagem = async (req, res) => {
  try {
    const { grupoId } = req.params;
    const { conteudo } = req.body;
    
    const mensagem = await MensagemGrupo.create({
      conteudo,
      usuarioId: req.usuario.id,
      grupoId
    });

    const mensagemComUsuario = await MensagemGrupo.findOne({
      where: { id: mensagem.id },
      include: [{
        model: Usuario,
        attributes: ['id', 'nome']
      }]
    });

    res.status(201).json(mensagemComUsuario);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao enviar mensagem' });
  }
};