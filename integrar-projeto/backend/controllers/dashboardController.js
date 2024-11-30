// backend/controllers/dashboardController.js
const { Usuario, Grupo } = require('../models');

const dashboardController = {
    getDashboardData: async (req, res) => {
        try {
            const userId = req.usuario.id;

            // Buscar informações do usuário
            const usuario = await Usuario.findByPk(userId, {
                attributes: ['id', 'nome', 'tipo_usuario']
            });

            // Buscar grupos recomendados
            const gruposRecomendados = await Grupo.findAll({
                limit: 2,
                order: [['createdAt', 'DESC']]
            });

            // Buscar dados de monitoramento do dia
            const hoje = new Date().toISOString().split('T')[0];

            res.json({
                usuario,
                gruposRecomendados,
                atividadesDiarias: [
                    {
                        id: 1,
                        titulo: "Participar de um grupo de discussão",
                        duracao: "15 minutos",
                        completada: false
                    },
                    {
                        id: 2,
                        titulo: "Fazer uma pausa dos jogos",
                        duracao: "30 minutos",
                        completada: false
                    }
                ]
            });

        } catch (error) {
            console.error('Erro ao buscar dados do dashboard:', error);
            res.status(500).json({ mensagem: 'Erro ao carregar dashboard' });
        }
    },

    atualizarTempoJogos: async (req, res) => {
        try {
            const { tempo } = req.body;
            const userId = req.usuario.id;

            // Aqui você implementaria a lógica para salvar o tempo de jogo

            res.json({ mensagem: 'Tempo atualizado com sucesso' });
        } catch (error) {
            console.error('Erro ao atualizar tempo:', error);
            res.status(500).json({ mensagem: 'Erro ao atualizar tempo de jogos' });
        }
    },

    registrarHumor: async (req, res) => {
        try {
            const { humor } = req.body;
            const userId = req.usuario.id;

            // Aqui você implementaria a lógica para salvar o humor

            res.json({ mensagem: 'Humor registrado com sucesso' });
        } catch (error) {
            console.error('Erro ao registrar humor:', error);
            res.status(500).json({ mensagem: 'Erro ao registrar humor' });
        }
    }
};

module.exports = dashboardController;