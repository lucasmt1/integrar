const { DiarioRegistro, Usuario } = require('../models');

const diarioController = {
    // Criar novo registro
    criarRegistro: async (req, res) => {
        try {
            const { sentimento, texto, tempoJogos, interacoesSociais } = req.body;
            
            const registro = await DiarioRegistro.create({
                sentimento,
                texto,
                tempoJogos,
                interacoesSociais,
                usuarioId: req.usuario.id
            });

            res.status(201).json(registro);
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensagem: "Erro ao criar registro" });
        }
    },

    // Listar registros do usuário
    listarRegistros: async (req, res) => {
        try {
            const registros = await DiarioRegistro.findAll({
                where: { usuarioId: req.usuario.id },
                order: [['createdAt', 'DESC']],
                include: [{
                    model: Usuario,
                    attributes: ['id', 'nome']
                }]
            });

            res.json(registros);
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensagem: "Erro ao listar registros" });
        }
    },

    // Buscar estatísticas
    obterEstatisticas: async (req, res) => {
        try {
            const registros = await DiarioRegistro.findAll({
                where: { usuarioId: req.usuario.id },
                order: [['createdAt', 'DESC']],
                limit: 7 // últimos 7 dias
            });

            const estatisticas = {
                mediaTempoJogos: registros.reduce((acc, reg) => acc + (reg.tempoJogos || 0), 0) / registros.length,
                mediaInteracoes: registros.reduce((acc, reg) => acc + (reg.interacoesSociais || 0), 0) / registros.length,
                sentimentosPeriodo: registros.map(reg => ({
                    data: reg.createdAt,
                    sentimento: reg.sentimento
                }))
            };

            res.json(estatisticas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensagem: "Erro ao obter estatísticas" });
        }
    },

    // Excluir registro
    excluirRegistro: async (req, res) => {
        try {
            const { id } = req.params;
            const registro = await DiarioRegistro.findOne({
                where: { 
                    id,
                    usuarioId: req.usuario.id
                }
            });

            if (!registro) {
                return res.status(404).json({ mensagem: "Registro não encontrado" });
            }

            await registro.destroy();
            res.json({ mensagem: "Registro excluído com sucesso" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensagem: "Erro ao excluir registro" });
        }
    },

    // Editar registro
    editarRegistro: async (req, res) => {
        try {
            const { id } = req.params;
            const { texto, tempoJogos, interacoesSociais } = req.body;

            const registro = await DiarioRegistro.findOne({
                where: { 
                    id,
                    usuarioId: req.usuario.id
                }
            });

            if (!registro) {
                return res.status(404).json({ mensagem: "Registro não encontrado" });
            }

            await registro.update({
                texto,
                tempoJogos,
                interacoesSociais
            });

            res.json(registro);
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensagem: "Erro ao editar registro" });
        }
    }
};

module.exports = diarioController;