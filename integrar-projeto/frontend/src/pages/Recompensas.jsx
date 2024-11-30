import React, { useState } from 'react';

function Recompensas() {
  const [nivelAtual, setNivelAtual] = useState({
    nivel: 2,
    pontos: 350,
    pontosProximoNivel: 500
  });

  const recompensas = [
    {
      id: 1,
      titulo: "Emblema Socialização Iniciante",
      tipo: "emblema",
      descricao: "Complete 3 interações sociais",
      pontosNecessarios: 300,
      status: "desbloqueado",
      icone: "🌟"
    },
    {
      id: 2,
      titulo: "Mestre do Equilíbrio",
      tipo: "conquista",
      descricao: "Mantenha tempo de jogos controlado por 1 semana",
      pontosNecessarios: 400,
      status: "disponivel",
      icone: "⭐"
    },
    {
      id: 3,
      titulo: "Comunicador Bronze",
      tipo: "titulo",
      descricao: "Participe ativamente de 5 discussões em grupo",
      pontosNecessarios: 600,
      status: "bloqueado",
      icone: "🏆"
    }
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Cabeçalho com Nível e Progresso */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold">Nível {nivelAtual.nivel}</h1>
            <p className="text-gray-600">Continue evoluindo!</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold">{nivelAtual.pontos} pontos</p>
            <p className="text-sm text-gray-500">
              Próximo nível: {nivelAtual.pontosProximoNivel - nivelAtual.pontos} pontos restantes
            </p>
          </div>
        </div>
        
        {/* Barra de Progresso */}
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div 
            className="bg-blue-500 h-4 rounded-full transition-all"
            style={{ 
              width: `${(nivelAtual.pontos / nivelAtual.pontosProximoNivel) * 100}%` 
            }}
          ></div>
        </div>
      </div>

      {/* Grade de Recompensas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recompensas.map(recompensa => (
          <div 
            key={recompensa.id} 
            className={`bg-white rounded-lg shadow overflow-hidden ${
              recompensa.status === 'bloqueado' ? 'opacity-50' : ''
            }`}
          >
            <div className="p-6">
              <div className="flex gap-4 items-center mb-4">
                <span className="text-3xl">{recompensa.icone}</span>
                <div>
                  <h3 className="font-bold">{recompensa.titulo}</h3>
                  <span className={`text-sm px-2 py-1 rounded ${
                    recompensa.tipo === 'emblema' ? 'bg-blue-100 text-blue-700' :
                    recompensa.tipo === 'conquista' ? 'bg-green-100 text-green-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {recompensa.tipo}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{recompensa.descricao}</p>

              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">
                  {recompensa.pontosNecessarios} pontos necessários
                </span>
                {recompensa.status === 'desbloqueado' && (
                  <span className="text-green-500">✓ Desbloqueado</span>
                )}
              </div>
            </div>

            <div className="px-6 py-4 bg-gray-50 border-t">
              {recompensa.status === 'disponivel' && (
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Reivindicar
                </button>
              )}
              {recompensa.status === 'bloqueado' && (
                <div className="text-center text-gray-500">
                  🔒 Bloqueado
                </div>
              )}
              {recompensa.status === 'desbloqueado' && (
                <div className="text-center text-green-600">
                  Recompensa Obtida
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Próximas Metas */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Próximas Metas</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
              🎯
            </div>
            <div className="flex-1">
              <h3 className="font-bold">Nível 3</h3>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">150 pontos restantes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recompensas;