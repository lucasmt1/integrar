const express = require('express');
const router = express.Router();
const diarioController = require('../controllers/diarioController');
const authMiddleware = require('../middleware/auth');

// Proteger todas as rotas
router.use(authMiddleware);

// Rotas
router.post('/', diarioController.criarRegistro);
router.get('/', diarioController.listarRegistros);
router.get('/estatisticas', diarioController.obterEstatisticas);
router.put('/:id', diarioController.editarRegistro);
router.delete('/:id', diarioController.excluirRegistro);

module.exports = router;