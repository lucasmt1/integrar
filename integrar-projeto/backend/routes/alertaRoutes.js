const express = require('express');
const router = express.Router();
const alertaController = require('../controllers/alertaController');
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

router.get('/', alertaController.getAlertas);
router.put('/:id/lido', alertaController.marcarComoLido);
router.post('/', alertaController.criarAlerta);

module.exports = router;