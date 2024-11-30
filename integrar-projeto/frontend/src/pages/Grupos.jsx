// frontend/src/pages/Grupos.jsx
import React, { useState } from 'react';

function Grupos() {
  const [grupoSelecionado, setGrupoSelecionado] = useState(null);

  const grupos = [
    {
      id: 1,
      nome: "Amigos dos Jogos",
      descricao: "Encontre equilíbrio entre jogos e vida social",
      membros: 12,
      temas: ["jogos", "equilíbrio", "socialização"],
      mensagens: [
        { usuario: "João", texto: "Como vocês lidam com o tempo de jogo?" },
        { usuario: "Maria", texto: "Eu estabeleci horários fixos para jogar" }
      ]
    },
    {
      id: 2,
      nome: "Superando a Timidez",
      descricao: "Grupo de apoio para desenvolver habilidades sociais",
      membros: 8,
      temas: ["timidez", "ansiedade social", "autoestima"],
      mensagens: [
        { usuario: "Pedro", texto: "Alguém tem dicas para falar em público?" },
        { usuario: "Ana", texto: "Comece praticando com amigos próximos" }
      ]
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Grupos de Apoio</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Lista de Grupos */}
        <div className="md:col-span-1 space-y-4">
          {grupos.map(grupo => (
            <div
              key={grupo.id}
              className={`bg-white p-4 rounded-lg shadow cursor-pointer transition-all ${
                grupoSelecionado?.id === grupo.id ? 'border-2 border-blue-500' : ''
              }`}
              onClick={() => setGrupoSelecionado(grupo)}
            >
              <h3 className="font-bold">{grupo.nome}</h3>
              <p className="text-sm text-gray-600 mb-2">{grupo.descricao}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>{grupo.membros} membros</span>
                <span className="mx-2">•</span>
                <span>{grupo.mensagens.length} mensagens</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {grupo.temas.map(tema => (
                  <span
                    key={tema}
                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                  >
                    {tema}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Área de Conversa */}
        <div className="md:col-span-2">
          {grupoSelecionado ? (
            <div className="bg-white rounded-lg shadow h-[600px] flex flex-col">
              {/* Cabeçalho do Grupo */}
              <div className="p-4 border-b">
                <h2 className="font-bold text-xl">{grupoSelecionado.nome}</h2>
                <p className="text-gray-600">{grupoSelecionado.descricao}</p>
              </div>

              {/* Mensagens */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {grupoSelecionado.mensagens.map((msg, idx) => (
                  <div key={idx} className="bg-gray-50 p-3 rounded">
                    <span className="font-bold text-blue-600">{msg.usuario}</span>
                    <p>{msg.texto}</p>
                  </div>
                ))}
              </div>

              {/* Input de Mensagem */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Digite sua mensagem..."
                    className="flex-1 p-2 border rounded"
                  />
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Enviar
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Lembre-se: Este é um espaço seguro para compartilhar experiências
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
              Selecione um grupo para começar a conversar
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Grupos;