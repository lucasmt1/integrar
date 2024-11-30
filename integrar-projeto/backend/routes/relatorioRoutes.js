const express = require('express');
const router = express.Router();
const relatorioController = require('../controllers/relatorioController');
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

router.get('/emocional', relatorioController.getDadosEmocionais);
router.get('/turma', relatorioController.getDadosTurma);

module.exports = router;