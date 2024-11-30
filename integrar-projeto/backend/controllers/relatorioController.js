const { sequelize } = require('../config/database');
const MonitoramentoEmocional = require('../models/MonitoramentoEmocional'); // Adicione esta linha se não estiver importando

// Função existente
exports.getDadosTurma = async (req, res) => {
  try {
    const dados = await MonitoramentoEmocional.findAll({
      attributes: [
        [sequelize.fn('DATE', sequelize.col('createdAt')), 'data'],
        [sequelize.fn('AVG', sequelize.col('nivelEstresse')), 'mediaEstresse'],
        [sequelize.fn('AVG', sequelize.col('nivelAnsiedade')), 'mediaAnsiedade']
      ],
      group: [sequelize.fn('DATE', sequelize.col('createdAt'))],
      order: [[sequelize.fn('DATE', sequelize.col('createdAt')), 'ASC']]
    });
    
    res.json(dados);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao buscar dados da turma' });
  }
};

// Adicione a função que falta
exports.getDadosEmocionais = async (req, res) => {
  try {
    const dados = await MonitoramentoEmocional.findAll({
      where: {
        userId: req.user.id // assumindo que você tem o ID do usuário no req.user
      },
      order: [['createdAt', 'DESC']]
    });
    
    res.json(dados);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao buscar dados emocionais' });
  }
};