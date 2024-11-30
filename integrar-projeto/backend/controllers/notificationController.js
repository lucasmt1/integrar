const Notification = require('../models/Notification');

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.findAll({
      where: { usuarioId: req.usuario.id, lida: false },
      order: [['createdAt', 'DESC']]
    });
    res.json(notifications);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao buscar notificações' });
  }
};

exports.marcarComoLida = async (req, res) => {
  try {
    const { id } = req.params;
    await Notification.update(
      { lida: true },
      { where: { id, usuarioId: req.usuario.id } }
    );
    res.json({ mensagem: 'Notificação marcada como lida' });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao atualizar notificação' });
  }
};