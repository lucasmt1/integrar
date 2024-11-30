// backend/routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

router.get('/', dashboardController.getDashboardData);
router.post('/tempo-jogos', dashboardController.atualizarTempoJogos);
router.post('/humor', dashboardController.registrarHumor);

module.exports = router;