import React, { useState } from 'react';
import api from '../services/api';
import Modal from './Modal';

function EditProfile({ isOpen, onClose, currentProfile, onUpdate }) {
  const [nome, setNome] = useState(currentProfile?.nome || '');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.put('/profile', { nome });
      onUpdate();
      onClose();
    } catch (error) {
      alert('Erro ao atualizar perfil');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Editar Perfil">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? 'Salvando...' : 'Salvar'}
        </button>
      </form>
    </Modal>
  );
}

export default EditProfile;