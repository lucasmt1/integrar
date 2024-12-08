const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

// Importar todas as rotas
const authRoutes = require('./routes/authRoutes');
const grupoRoutes = require('./routes/grupoRoutes');
const diarioRoutes = require('./routes/diarioRoutes');
const objetivoRoutes = require('./routes/objetivoRoutes');
const tarefaRoutes = require('./routes/tarefaRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const profileRoutes = require('./routes/profileRoutes');
const alertaRoutes = require('./routes/alertaRoutes');
const mensagemGrupoRoutes = require('./routes/mensagemGrupoRoutes');
const relatorioRoutes = require('./routes/relatorioRoutes');

const app = express();

// Middlewares
app.use(cors({
    origin: [
      'https://integrar-chi.vercel.app', // seu domínio no Vercel
      'http://localhost:3000' // para desenvolvimento local
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
app.use(express.json());

// Configurar todas as rotas
app.use('/auth', authRoutes);
app.use('/grupos', grupoRoutes);
app.use('/diario', diarioRoutes);
app.use('/objetivos', objetivoRoutes);
app.use('/tarefas', tarefaRoutes);
app.use('/notifications', notificationRoutes);
app.use('/profile', profileRoutes);
app.use('/alertas', alertaRoutes);
app.use('/', mensagemGrupoRoutes);
app.use('/relatorios', relatorioRoutes);

// Teste de conexão com o banco
sequelize.authenticate()
    .then(() => {
        console.log('Conexão com banco de dados estabelecida.');
    })
    .catch(err => {
        console.error('Erro ao conectar com banco:', err);
    });

// Sincronizar modelos com o banco
sequelize.sync()
    .then(() => {
        console.log('Modelos sincronizados com o banco de dados.');
    })
    .catch(err => {
        console.error('Erro ao sincronizar modelos:', err);
    });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

const dashboardRoutes = require('./routes/dashboardRoutes');
app.use('/dashboard', dashboardRoutes);