// backend/controllers/grupoController.js
const { Grupo, MensagemGrupo, Usuario } = require('../models');

const grupoController = {
   // Listar todos os grupos
   listarGrupos: async (req, res) => {
       try {
           const grupos = await Grupo.findAll({
               include: [{
                   model: Usuario,
                   attributes: ['id', 'nome'],
                   through: { attributes: [] }
               }]
           });
           res.json(grupos);
       } catch (error) {
           console.error(error);
           res.status(500).json({ mensagem: "Erro ao listar grupos" });
       }
   },

   // Criar novo grupo
   criarGrupo: async (req, res) => {
       try {
           const { nome, descricao } = req.body;
           const grupo = await Grupo.create({
               nome,
               descricao,
               criadoPor: req.usuario.id
           });

           // Adiciona o criador como membro do grupo
           await grupo.addUsuario(req.usuario.id);

           res.status(201).json(grupo);
       } catch (error) {
           console.error(error);
           res.status(500).json({ mensagem: "Erro ao criar grupo" });
       }
   },

   // Buscar grupo específico
   buscarGrupo: async (req, res) => {
       try {
           const { id } = req.params;
           const grupo = await Grupo.findByPk(id, {
               include: [{
                   model: Usuario,
                   attributes: ['id', 'nome'],
                   through: { attributes: [] }
               }]
           });

           if (!grupo) {
               return res.status(404).json({ mensagem: "Grupo não encontrado" });
           }

           res.json(grupo);
       } catch (error) {
           console.error(error);
           res.status(500).json({ mensagem: "Erro ao buscar grupo" });
       }
   },

   // Entrar em um grupo
   entrarGrupo: async (req, res) => {
       try {
           const { id } = req.params;
           const grupo = await Grupo.findByPk(id);

           if (!grupo) {
               return res.status(404).json({ mensagem: "Grupo não encontrado" });
           }

           await grupo.addUsuario(req.usuario.id);
           res.json({ mensagem: "Entrou no grupo com sucesso" });
       } catch (error) {
           console.error(error);
           res.status(500).json({ mensagem: "Erro ao entrar no grupo" });
       }
   },

   // Enviar mensagem no grupo
   enviarMensagem: async (req, res) => {
       try {
           const { id } = req.params;
           const { mensagem } = req.body;

           const novaMsg = await MensagemGrupo.create({
               conteudo: mensagem,
               grupoId: id,
               usuarioId: req.usuario.id
           });

           const msgCompleta = await MensagemGrupo.findOne({
               where: { id: novaMsg.id },
               include: [{
                   model: Usuario,
                   attributes: ['id', 'nome']
               }]
           });

           res.status(201).json(msgCompleta);
       } catch (error) {
           console.error(error);
           res.status(500).json({ mensagem: "Erro ao enviar mensagem" });
       }
   },

   // Listar mensagens do grupo
   listarMensagens: async (req, res) => {
       try {
           const { id } = req.params;
           const mensagens = await MensagemGrupo.findAll({
               where: { grupoId: id },
               include: [{
                   model: Usuario,
                   attributes: ['id', 'nome']
               }],
               order: [['createdAt', 'ASC']]
           });

           res.json(mensagens);
       } catch (error) {
           console.error(error);
           res.status(500).json({ mensagem: "Erro ao listar mensagens" });
       }
   },

   // Sair do grupo
   sairGrupo: async (req, res) => {
       try {
           const { id } = req.params;
           const grupo = await Grupo.findByPk(id);

           if (!grupo) {
               return res.status(404).json({ mensagem: "Grupo não encontrado" });
           }

           await grupo.removeUsuario(req.usuario.id);
           res.json({ mensagem: "Saiu do grupo com sucesso" });
       } catch (error) {
           console.error(error);
           res.status(500).json({ mensagem: "Erro ao sair do grupo" });
       }
   }
};

module.exports = grupoController;