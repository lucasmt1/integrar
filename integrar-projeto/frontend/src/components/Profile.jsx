import React, { useState } from 'react';
import { useGetProfileQuery, useUpdateProfileMutation } from '../services/api';
import Loading from '../components/Loading';

function Profile() {
  const { data: profile, isLoading } = useGetProfileQuery();
  const [updateProfile] = useUpdateProfileMutation();
  const [isEditing, setIsEditing] = useState(false);
  const [nome, setNome] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile({ nome }).unwrap();
      setIsEditing(false);
    } catch (error) {
      alert('Erro ao atualizar perfil');
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Meu Perfil</h3>
        {!isEditing && (
          <button 
            onClick={() => {
              setNome(profile.nome);
              setIsEditing(true);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Editar
          </button>
        )}
      </div>

      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Salvar
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancelar
            </button>
          </div>
        </form>
      ) : (
        <div className="grid gap-4">
          <div>
            <label className="text-gray-600 block mb-1">Nome</label>
            <p className="font-semibold">{profile.nome}</p>
          </div>
          <div>
            <label className="text-gray-600 block mb-1">Email</label>
            <p className="font-semibold">{profile.email}</p>
          </div>
          <div>
            <label className="text-gray-600 block mb-1">Tipo de Usuário</label>
            <p className="font-semibold">{profile.tipo_usuario}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;