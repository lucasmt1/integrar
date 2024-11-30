// frontend/src/context/NotificacaoContext.js
import React, { createContext, useContext, useState } from 'react';

const NotificacaoContext = createContext();

export function NotificacaoProvider({ children }) {
  const [notificacoes, setNotificacoes] = useState([]);

  const adicionarNotificacao = (notificacao) => {
    setNotificacoes(prev => [...prev, notificacao]);
  };

  const removerNotificacao = (id) => {
    setNotificacoes(prev => prev.filter(n => n.id !== id));
  };

  return (
    <NotificacaoContext.Provider value={{ 
      notificacoes, 
      adicionarNotificacao, 
      removerNotificacao 
    }}>
      {children}
    </NotificacaoContext.Provider>
  );
}

export const useNotificacoes = () => useContext(NotificacaoContext);