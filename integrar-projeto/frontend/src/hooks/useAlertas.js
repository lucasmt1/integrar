import { useState, useEffect } from 'react';
import api from '../services/api';

export function useAlertas() {
  const [alertas, setAlertas] = useState([]);

  const buscarAlertas = async () => {
    try {
      const response = await api.get('/alertas');
      setAlertas(response.data);
    } catch (error) {
      console.error('Erro ao buscar alertas');
    }
  };

  const marcarComoLido = async (id) => {
    try {
      await api.put(`/alertas/${id}/lido`);
      setAlertas(alertas.filter(alerta => alerta.id !== id));
    } catch (error) {
      console.error('Erro ao marcar alerta como lido');
    }
  };

  useEffect(() => {
    buscarAlertas();
    const interval = setInterval(buscarAlertas, 30000);
    return () => clearInterval(interval);
  }, []);

  return { alertas, marcarComoLido };
}