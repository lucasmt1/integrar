// frontend/src/pages/ControleJogos.jsx
import React, { useState } from 'react';

function ControleJogos() {
  const [tempoJogado, setTempoJogado] = useState(0);
  const [jogoAtual, setJogoAtual] = useState('');
  const [jogosRegistrados, setJogosRegistrados] = useState([
    { nome: "Fortnite", tempo: 2, data: "2024-02-23" },
    { nome: "Minecraft", tempo: 1.5, data: "2024-02-23" },
    { nome: "League of Legends", tempo: 1, data: "2024-02-22" }
  ]);

  const handleRegistrarTempo = () => {
    if (jogoAtual && tempoJogado > 0) {
      setJogosRegistrados([
        {
          nome: jogoAtual,
          tempo: Number(tempoJogado),
          data: new Date().toISOString().split('T')[0]
        },
        ...jogosRegistrados
      ]);
      setJogoAtual('');
      setTempoJogado(0);
    }
  };

  const tempoTotalHoje = jogosRegistrados
    .filter(jogo => jogo.data === new Date().toISOString().split('T')[0])
    .reduce((total, jogo) => total + jogo.tempo, 0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Controle de Tempo de Jogos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Registro de Tempo */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Registrar Tempo</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-2">Jogo</label>
              <input
                type="text"
                value={jogoAtual}
                onChange={(e) => setJogoAtual(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Nome do jogo"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Tempo jogado (horas)</label>
              <input
                type="number"
                value={tempoJogado}
                onChange={(e) => setTempoJogado(e.target.value)}
                className="w-full p-2 border rounded"
                min="0"
                step="0.5"
              />
            </div>
            <button
              onClick={handleRegistrarTempo}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Registrar
            </button>
          </div>

          <div className="mt-6">
            <div className={`p-4 rounded ${
              tempoTotalHoje > 3 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
            }`}>
              <p className="font-bold">Tempo total hoje: {tempoTotalHoje} horas</p>
              <p className="text-sm mt-1">
                {tempoTotalHoje > 3 
                  ? 'Você ultrapassou o limite recomendado de 3 horas diárias'
                  : 'Você está dentro do limite recomendado. Continue assim!'}
              </p>
            </div>
          </div>
        </div>

        {/* Histórico e Estatísticas */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Histórico</h2>
            <div className="space-y-3">
              {jogosRegistrados.map((jogo, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <div>
                    <p className="font-medium">{jogo.nome}</p>
                    <p className="text-sm text-gray-500">{jogo.data}</p>
                  </div>
                  <span className="text-blue-600 font-medium">{jogo.tempo}h</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Dicas para Redução</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-500">✓</span>
                <p>Estabeleça horários fixos para jogar</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500">✓</span>
                <p>Faça pausas a cada 1 hora de jogo</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500">✓</span>
                <p>Busque atividades alternativas</p>
              </div>
              <button className="w-full mt-4 bg-green-500 text-white p-2 rounded hover:bg-green-600">
                Ver Mais Dicas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ControleJogos;