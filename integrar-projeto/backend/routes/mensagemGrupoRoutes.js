const express = require('express');
const router = express.Router();
const mensagemGrupoController = require('../controllers/mensagemGrupoController');
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

router.get('/grupos/:grupoId/mensagens', mensagemGrupoController.listarMensagens);
router.post('/grupos/:grupoId/mensagens', mensagemGrupoController.enviarMensagem);

module.exports = router;