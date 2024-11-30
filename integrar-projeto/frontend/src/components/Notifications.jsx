import React, { useState, useEffect } from 'react';
import api from '../services/api';

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      const response = await api.get('/notifications');
      setNotifications(response.data);
    } catch (error) {
      console.error('Erro ao carregar notificações');
    }
  };

  return (
    <div className="fixed top-16 right-4 w-64">
      {notifications.map(notification => (
        <div 
          key={notification.id}
          className="bg-white shadow-lg rounded-lg p-4 mb-2 border-l-4 border-blue-500"
        >
          <h4 className="font-bold">{notification.titulo}</h4>
          <p className="text-sm text-gray-600">{notification.mensagem}</p>
        </div>
      ))}
    </div>
  );
}

export default Notifications;