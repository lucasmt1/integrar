const express = require('express');
const router = express.Router();
const objetivoController = require('../controllers/objetivoController');
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

router.post('/', objetivoController.criarObjetivo);
router.get('/', objetivoController.listarObjetivos);
router.get('/estatisticas', objetivoController.obterEstatisticas);
router.get('/tipo/:tipo', objetivoController.listarObjetivosPorTipo);
router.get('/:id', objetivoController.buscarObjetivo);
router.put('/:id/progresso', objetivoController.atualizarProgresso);
router.delete('/:id', objetivoController.excluirObjetivo);

module.exports = router;