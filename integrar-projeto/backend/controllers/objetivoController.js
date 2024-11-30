const { Objetivo, Usuario } = require('../models');

const objetivoController = {
    // Criar novo objetivo
    criarObjetivo: async (req, res) => {
        try {
            const { titulo, tipo, meta, prazo, descricao } = req.body;

            const objetivo = await Objetivo.create({
                titulo,
                tipo,
                meta,
                prazo,
                descricao,
                progresso: 0,
                usuarioId: req.usuario.id
            });

            res.status(201).json(objetivo);
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensagem: "Erro ao criar objetivo" });
        }
    },

    // Listar objetivos do usuário
    listarObjetivos: async (req, res) => {
        try {
            const objetivos = await Objetivo.findAll({
                where: { usuarioId: req.usuario.id },
                order: [['prazo', 'ASC']],
                include: [{
                    model: Usuario,
                    attributes: ['id', 'nome']
                }]
            });

            res.json(objetivos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensagem: "Erro ao listar objetivos" });
        }
    },

    // Atualizar progresso do objetivo
    atualizarProgresso: async (req, res) => {
        try {
            const { id } = req.params;
            const { progresso } = req.body;

            const objetivo = await Objetivo.findOne({
                where: { 
                    id,
                    usuarioId: req.usuario.id
                }
            });

            if (!objetivo) {
                return res.status(404).json({ mensagem: "Objetivo não encontrado" });
            }

            await objetivo.update({ progresso });
            
            // Verificar se objetivo foi concluído
            if (progresso >= objetivo.meta) {
                // Aqui você pode adicionar lógica para recompensas
                // Exemplo: atribuir pontos, conquistas, etc.
            }

            res.json(objetivo);
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensagem: "Erro ao atualizar progresso" });
        }
    },

    // Excluir objetivo
    excluirObjetivo: async (req, res) => {
        try {
            const { id } = req.params;
            const objetivo = await Objetivo.findOne({
                where: { 
                    id,
                    usuarioId: req.usuario.id
                }
            });

            if (!objetivo) {
                return res.status(404).json({ mensagem: "Objetivo não encontrado" });
            }

            await objetivo.destroy();
            res.json({ mensagem: "Objetivo excluído com sucesso" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensagem: "Erro ao excluir objetivo" });
        }
    },

    // Buscar objetivo específico
    buscarObjetivo: async (req, res) => {
        try {
            const { id } = req.params;
            const objetivo = await Objetivo.findOne({
                where: { 
                    id,
                    usuarioId: req.usuario.id
                },
                include: [{
                    model: Usuario,
                    attributes: ['id', 'nome']
                }]
            });

            if (!objetivo) {
                return res.status(404).json({ mensagem: "Objetivo não encontrado" });
            }

            res.json(objetivo);
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensagem: "Erro ao buscar objetivo" });
        }
    },

    // Listar objetivos por tipo
    listarObjetivosPorTipo: async (req, res) => {
        try {
            const { tipo } = req.params;
            const objetivos = await Objetivo.findAll({
                where: { 
                    usuarioId: req.usuario.id,
                    tipo
                },
                order: [['prazo', 'ASC']],
                include: [{
                    model: Usuario,
                    attributes: ['id', 'nome']
                }]
            });

            res.json(objetivos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensagem: "Erro ao listar objetivos por tipo" });
        }
    },

    // Obter estatísticas dos objetivos
    obterEstatisticas: async (req, res) => {
        try {
            const objetivos = await Objetivo.findAll({
                where: { usuarioId: req.usuario.id }
            });

            const estatisticas = {
                total: objetivos.length,
                concluidos: objetivos.filter(obj => obj.progresso >= obj.meta).length,
                emProgresso: objetivos.filter(obj => obj.progresso > 0 && obj.progresso < obj.meta).length,
                naoIniciados: objetivos.filter(obj => obj.progresso === 0).length,
                porTipo: {
                    social: objetivos.filter(obj => obj.tipo === 'social').length,
                    jogos: objetivos.filter(obj => obj.tipo === 'jogos').length
                }
            };

            res.json(estatisticas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensagem: "Erro ao obter estatísticas" });
        }
    }
};

module.exports = objetivoController;