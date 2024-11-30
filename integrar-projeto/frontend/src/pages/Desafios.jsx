import React, { useState } from 'react';

function Desafios() {
  const [filtro, setFiltro] = useState('todos');

  const desafios = [
    {
      id: 1,
      titulo: "Primeira Conversa",
      tipo: "social",
      status: "em_andamento",
      descricao: "Inicie uma conversa com um colega novo",
      pontos: 100,
      dificuldade: "fácil",
      dicas: ["Comece com um 'oi'", "Pergunte sobre as aulas", "Seja gentil"]
    },
    {
      id: 2,
      titulo: "Mestre do Tempo",
      tipo: "jogos",
      status: "completado",
      descricao: "Mantenha o tempo de jogos abaixo de 2h por 3 dias",
      pontos: 150,
      dificuldade: "médio",
      dicas: ["Use um timer", "Estabeleça horários fixos"]
    },
    {
      id: 3,
      titulo: "Participação Ativa",
      tipo: "social",
      status: "disponivel",
      descricao: "Participe de uma discussão em grupo",
      pontos: 200,
      dificuldade: "médio",
      dicas: ["Escolha um tópico de seu interesse", "Prepare-se antes"]
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Desafios e Conquistas</h1>
        <div className="mt-4 flex items-center gap-4">
          <div className="bg-blue-100 p-2 rounded">
            <span className="font-bold">350</span>
            <span className="text-sm ml-1">pontos</span>
          </div>
          <div className="bg-green-100 p-2 rounded">
            <span className="font-bold">2/5</span>
            <span className="text-sm ml-1">desafios</span>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="mb-6 flex gap-4">
        <button 
          onClick={() => setFiltro('todos')}
          className={`px-4 py-2 rounded ${
            filtro === 'todos' ? 'bg-blue-500 text-white' : 'bg-gray-100'
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => setFiltro('social')}
          className={`px-4 py-2 rounded ${
            filtro === 'social' ? 'bg-blue-500 text-white' : 'bg-gray-100'
          }`}
        >
          Socialização
        </button>
        <button
          onClick={() => setFiltro('jogos')}
          className={`px-4 py-2 rounded ${
            filtro === 'jogos' ? 'bg-blue-500 text-white' : 'bg-gray-100'
          }`}
        >
          Controle de Jogos
        </button>
      </div>

      {/* Lista de Desafios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {desafios
          .filter(d => filtro === 'todos' || d.tipo === filtro)
          .map(desafio => (
            <div key={desafio.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg">{desafio.titulo}</h3>
                  <span className={`
                    px-2 py-1 rounded text-sm
                    ${desafio.status === 'completado' ? 'bg-green-100 text-green-700' :
                      desafio.status === 'em_andamento' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'}
                  `}>
                    {desafio.status === 'completado' ? 'Completado' :
                     desafio.status === 'em_andamento' ? 'Em Andamento' :
                     'Disponível'}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{desafio.descricao}</p>

                <div className="mb-4">
                  <span className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded">
                    {desafio.pontos} pontos
                  </span>
                  <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded ml-2">
                    {desafio.dificuldade}
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="font-medium text-sm">Dicas:</p>
                  {desafio.dicas.map((dica, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
                      <span>•</span>
                      <span>{dica}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-6 py-4 bg-gray-50 border-t">
                {desafio.status === 'disponivel' && (
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Começar Desafio
                  </button>
                )}
                {desafio.status === 'em_andamento' && (
                  <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                    Completar Desafio
                  </button>
                )}
                {desafio.status === 'completado' && (
                  <div className="text-center text-green-600">
                    ✓ Desafio Concluído
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Desafios;