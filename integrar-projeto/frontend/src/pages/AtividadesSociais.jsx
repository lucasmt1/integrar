import React, { useState } from 'react';

function AtividadesSociais() {
  const [filtroAtividade, setFiltroAtividade] = useState('todas');

  const atividades = [
    {
      id: 1,
      titulo: "Clube de Jogadores",
      tipo: "presencial",
      dificuldade: "fácil",
      descricao: "Encontro para jogar e conversar sobre jogos favoritos",
      participantes: 8,
      data: "Próximo encontro: Sábado, 14:00",
      local: "Sala de Recreação"
    },
    {
      id: 2,
      titulo: "Bate-papo Virtual",
      tipo: "online",
      dificuldade: "iniciante",
      descricao: "Conversa descontraída sobre hobbies e interesses",
      participantes: 5,
      data: "Diariamente, 18:00",
      local: "Discord"
    },
    {
      id: 3,
      titulo: "Grupo de Estudos",
      tipo: "hibrido",
      dificuldade: "moderado",
      descricao: "Estude em grupo e faça novas amizades",
      participantes: 6,
      data: "Terças e Quintas, 15:00",
      local: "Biblioteca/Online"
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Atividades Sociais</h1>
        <p className="text-gray-600">
          Participe de atividades para desenvolver suas habilidades sociais
        </p>
      </div>

      {/* Filtros */}
      <div className="mb-6 flex gap-4">
        <select
          value={filtroAtividade}
          onChange={(e) => setFiltroAtividade(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="todas">Todas as Atividades</option>
          <option value="presencial">Presenciais</option>
          <option value="online">Online</option>
          <option value="hibrido">Híbridas</option>
        </select>
      </div>

      {/* Lista de Atividades */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {atividades
          .filter(ativ => filtroAtividade === 'todas' || ativ.tipo === filtroAtividade)
          .map(atividade => (
            <div key={atividade.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg">{atividade.titulo}</h3>
                  <span className={`
                    px-2 py-1 rounded text-sm
                    ${atividade.tipo === 'online' ? 'bg-green-100 text-green-700' : 
                      atividade.tipo === 'presencial' ? 'bg-blue-100 text-blue-700' :
                      'bg-purple-100 text-purple-700'}
                  `}>
                    {atividade.tipo}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{atividade.descricao}</p>

                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {atividade.data}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {atividade.local}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {atividade.participantes} participantes
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <span className={`text-xs px-2 py-1 rounded ${
                    atividade.dificuldade === 'fácil' ? 'bg-green-100 text-green-700' :
                    atividade.dificuldade === 'moderado' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {atividade.dificuldade}
                  </span>
                </div>
              </div>

              <div className="px-6 py-4 bg-gray-50 border-t">
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                  Participar
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AtividadesSociais;