const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.cadastrar = async (req, res) => {
  try {
    const { nome, email, senha, tipo_usuario } = req.body;
    
    // Verificar se usuário já existe
    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).json({ mensagem: 'Usuário já cadastrado' });
    }

    // Criptografar senha
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    // Criar usuário
    const novoUsuario = await Usuario.create({
      nome,
      email,
      senha: senhaCriptografada,
      tipo_usuario
    });

    res.status(201).json({ 
      id: novoUsuario.id, 
      nome: novoUsuario.nome, 
      email: novoUsuario.email 
    });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao cadastrar usuário', erro: erro.message });
  }
};