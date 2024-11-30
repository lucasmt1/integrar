const express = require('express');
const router = express.Router();
const MonitoramentoController = require('../controllers/monitoramentoController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, MonitoramentoController.criarRegistro);
router.get('/', authMiddleware, MonitoramentoController.listarRegistros);

module.exports = router;