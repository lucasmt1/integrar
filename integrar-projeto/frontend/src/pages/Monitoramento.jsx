// frontend/src/pages/Monitoramento.jsx
import React, { useState } from 'react';

function Monitoramento() {
  const [periodoSelecionado, setPeriodoSelecionado] = useState('semana');

  // Dados de exemplo
  const dadosProgresso = {
    emocional: {
      semana: [
        { dia: 'Seg', humor: 'bom', ansiedade: 'baixa', tempoJogos: 2 },
        { dia: 'Ter', humor: 'ansioso', ansiedade: 'alta', tempoJogos: 4 },
        { dia: 'Qua', humor: 'normal', ansiedade: 'média', tempoJogos: 3 },
        { dia: 'Qui', humor: 'bom', ansiedade: 'baixa', tempoJogos: 2 },
        { dia: 'Sex', humor: 'bom', ansiedade: 'baixa', tempoJogos: 2 },
      ]
    },
    conquistas: [
      { titulo: 'Primeira Interação', data: '2024-02-20', icone: '🌟' },
      { titulo: 'Tempo de Jogo Controlado', data: '2024-02-19', icone: '⭐' },
      { titulo: 'Participação em Grupo', data: '2024-02-18', icone: '🏆' },
    ]
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Seu Progresso</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Gráfico de Progresso */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Acompanhamento</h2>
            <select 
              value={periodoSelecionado}
              onChange={(e) => setPeriodoSelecionado(e.target.value)}
              className="border p-1 rounded"
            >
              <option value="semana">Última Semana</option>
              <option value="mes">Último Mês</option>
            </select>
          </div>

          <div className="space-y-4">
            {dadosProgresso.emocional.semana.map((dia, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{dia.dia}</span>
                  <div className="flex gap-4">
                    <span>{dia.humor === 'bom' ? '😊' : dia.humor === 'normal' ? '😐' : '😔'}</span>
                    <span>{dia.tempoJogos}h jogadas</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conquistas */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Suas Conquistas</h2>
          <div className="space-y-4">
            {dadosProgresso.conquistas.map((conquista, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-blue-50 rounded">
                <span className="text-2xl">{conquista.icone}</span>
                <div>
                  <p className="font-medium">{conquista.titulo}</p>
                  <p className="text-sm text-gray-600">{conquista.data}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dicas Personalizadas */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Dicas para Você</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              <p>Tente reduzir gradualmente o tempo de jogos para 2 horas por dia</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              <p>Pratique técnicas de respiração quando se sentir ansioso</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              <p>Participe mais ativamente dos grupos de discussão</p>
            </div>
          </div>
        </div>

        {/* Metas */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Suas Metas</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Tempo de Jogo Diário</span>
                <span>2h/3h</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '66%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Interações Sociais</span>
                <span>3/5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Monitoramento;