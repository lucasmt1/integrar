const Usuario = require('../models/Usuario'); // Importação direta do modelo
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authController = {
    cadastro: async (req, res) => {
        try {
            console.log('Iniciando cadastro');
            const { nome, email, senha, tipo_usuario } = req.body;

            // Verificar se usuário já existe
            const usuarioExiste = await Usuario.findOne({ where: { email } });
            if (usuarioExiste) {
                return res.status(400).json({ mensagem: 'Email já cadastrado' });
            }

            // Criptografar senha
            const senhaCriptografada = await bcrypt.hash(senha, 10);

            // Criar usuário
            const usuario = await Usuario.create({
                nome,
                email,
                senha: senhaCriptografada,
                tipo_usuario
            });

            console.log('Usuário criado:', usuario);

            res.status(201).json({
                mensagem: 'Usuário cadastrado com sucesso',
                usuario: {
                    id: usuario.id,
                    nome: usuario.nome,
                    email: usuario.email,
                    tipo_usuario: usuario.tipo_usuario
                }
            });

        } catch (error) {
            console.error('Erro no cadastro:', error);
            res.status(500).json({ 
                mensagem: 'Erro no cadastro', 
                erro: error.message,
                stack: error.stack 
            });
        }
    },

    login: async (req, res) => {
        try {
            const { email, senha } = req.body;
    
            // Buscar usuário pelo email
            const usuario = await Usuario.findOne({ where: { email } });
            
            if (!usuario) {
                return res.status(401).json({ mensagem: 'Email ou senha incorretos' });
            }
    
            // Verificar senha
            const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
            if (!senhaCorreta) {
                return res.status(401).json({ mensagem: 'Email ou senha incorretos' });
            }
    
            // Gerar token JWT
            const token = jwt.sign(
                { 
                    id: usuario.id, 
                    email: usuario.email,
                    tipo_usuario: usuario.tipo_usuario 
                },
                'sua_chave_secreta', // Em produção, use variável de ambiente
                { expiresIn: '24h' }
            );
    
            res.json({
                usuario: {
                    id: usuario.id,
                    nome: usuario.nome,
                    email: usuario.email,
                    tipo_usuario: usuario.tipo_usuario
                },
                token
            });
    
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensagem: 'Erro no login' });
        }
    }
};

module.exports = authController;