const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        
        if (!token) {
            return res.status(401).json({ mensagem: 'Token não fornecido' });
        }

        const decoded = jwt.verify(token, 'sua_chave_secreta'); // Use variável de ambiente na produção
        req.usuario = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ mensagem: 'Token inválido' });
    }
};

module.exports = authMiddleware;