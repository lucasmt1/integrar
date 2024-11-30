// frontend/src/pages/Dashboard.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Dashboard() {
  const user = useSelector(state => state.auth.user);
  const [tempoJogos, setTempoJogos] = useState(0);
  const [humorSelecionado, setHumorSelecionado] = useState(null);

  const humores = [
    { emoji: '😊', descricao: 'Feliz' },
    { emoji: '😐', descricao: 'Normal' },
    { emoji: '😔', descricao: 'Triste' },
    { emoji: '😰', descricao: 'Ansioso' },
    { emoji: '😄', descricao: 'Muito Feliz' }
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Cabeçalho */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Olá, {user?.nome}!
        </h1>
        <p className="text-gray-600">
          {new Date().toLocaleDateString('pt-BR', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Check-in Diário */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Como você está hoje?</h2>
          <div className="flex justify-around">
            {humores.map((humor, index) => (
              <button
                key={index}
                onClick={() => setHumorSelecionado(humor)}
                className={`p-4 rounded-full transition-colors ${
                  humorSelecionado === humor 
                    ? 'bg-blue-100 scale-110' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <span className="text-2xl">{humor.emoji}</span>
                <p className="text-xs mt-1">{humor.descricao}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Controle de Tempo */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Tempo de Jogos Hoje</h2>
          <div className="space-y-4">
            <div>
              <input
                type="range"
                min="0"
                max="8"
                step="0.5"
                value={tempoJogos}
                onChange={(e) => setTempoJogos(e.target.value)}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>0h</span>
                <span>{tempoJogos}h</span>
                <span>8h</span>
              </div>
            </div>
            <div className={`p-3 rounded ${
              tempoJogos > 3 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
            }`}>
              {tempoJogos > 3 
                ? 'Você está acima do tempo recomendado de jogos diários'
                : 'Você está mantendo um bom equilíbrio!'
              }
            </div>
          </div>
        </div>

        {/* Grupos Disponíveis */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Grupos Disponíveis</h2>
          <div className="space-y-4">
            <div className="border p-3 rounded hover:border-blue-500">
              <h3 className="font-bold">Grupo de Jogadores</h3>
              <p className="text-sm text-gray-600 mb-2">Discuta sobre jogos de forma saudável</p>
              <button className="text-blue-500 hover:text-blue-700">
                Participar
              </button>
            </div>
            <div className="border p-3 rounded hover:border-blue-500">
              <h3 className="font-bold">Amigos da Escola</h3>
              <p className="text-sm text-gray-600 mb-2">Faça novas amizades</p>
              <button className="text-blue-500 hover:text-blue-700">
                Participar
              </button>
            </div>
          </div>
        </div>

        {/* Atividades Sugeridas */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Atividades Sugeridas</h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <input type="checkbox" className="w-5 h-5 mr-3" />
              <div>
                <p className="font-medium">Participar de um grupo de discussão</p>
                <p className="text-sm text-gray-500">15 minutos</p>
              </div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="w-5 h-5 mr-3" />
              <div>
                <p className="font-medium">Fazer uma pausa dos jogos</p>
                <p className="text-sm text-gray-500">30 minutos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;