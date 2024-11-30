const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

router.get('/', tarefaController.listarTarefas);
router.post('/', tarefaController.criarTarefa);
router.post('/:id/completar', tarefaController.completarTarefa);

module.exports = router;