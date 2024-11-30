const socketIO = require('socket.io');
const jwt = require('jsonwebtoken');

function initializeSocket(server) {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

  // Middleware de autenticação
  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) {
      return next(new Error('Authentication error'));
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      socket.user = decoded;
      next();
    } catch (err) {
      next(new Error('Authentication error'));
    }
  });

  // Manipulação de conexões
  io.on('connection', (socket) => {
    console.log(`User connected: ${socket.user.id}`);

    // Entrar na sala específica do usuário
    socket.join(`user_${socket.user.id}`);

    // Entrar nas salas dos grupos do usuário
    if (socket.user.grupos) {
      socket.user.grupos.forEach(grupoId => {
        socket.join(`grupo_${grupoId}`);
      });
    }

    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.user.id}`);
    });
  });

  return io;
}

module.exports = initializeSocket;