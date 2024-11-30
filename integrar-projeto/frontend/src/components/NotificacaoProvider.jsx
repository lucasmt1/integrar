// frontend/src/components/NotificacaoProvider.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import socketService from '../services/socketService';
import Toast from './Toast';

const NotificacaoContext = createContext();

export function NotificacaoProvider({ children }) {
  const [notificacoes, setNotificacoes] = useState([]);
  const [toast, setToast] = useState(null);
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if (token) {
      const socket = socketService.initialize(token);

      socket.on('nova_notificacao', (notificacao) => {
        setNotificacoes(prev => [...prev, notificacao]);
        setToast({
          mensagem: notificacao.mensagem,
          tipo: notificacao.tipo
        });
      });

      socket.on('notificacao_grupo', (dados) => {
        setToast({
          mensagem: dados.mensagem,
          tipo: 'info'
        });
      });

      return () => {
        socketService.disconnect();
      };
    }
  }, [token]);

  const removerNotificacao = (id) => {
    setNotificacoes(prev => prev.filter(n => n.id !== id));
  };

  return (
    <NotificacaoContext.Provider value={{ notificacoes, removerNotificacao }}>
      {children}
      {toast && (
        <Toast
          message={toast.mensagem}
          type={toast.tipo}
          onClose={() => setToast(null)}
        />
      )}
    </NotificacaoContext.Provider>
  );
}

export const useNotificacoes = () => useContext(NotificacaoContext);