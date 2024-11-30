const express = require('express');
const router = express.Router();
const grupoController = require('../controllers/grupoController');
const authMiddleware = require('../middleware/auth');

// Usar middleware de autenticação
router.use(authMiddleware);

// Definir rotas
router.get('/', grupoController.listarGrupos);
router.post('/', grupoController.criarGrupo);
router.get('/:id', grupoController.buscarGrupo);
router.post('/:id/mensagens', grupoController.enviarMensagem);
router.get('/:id/mensagens', grupoController.listarMensagens);
router.post('/:id/entrar', grupoController.entrarGrupo);
router.post('/:id/sair', grupoController.sairGrupo);

module.exports = router;