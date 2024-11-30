import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function GrupoDetalhe() {
  const grupo = {
    id: 1,
    nome: "Jogadores Conscientes",
    descricao: "Grupo para discutir sobre uso saudável de jogos e trocar experiências",
    membros: 12,
    membrosOnline: 3,
    mensagens: [
      { id: 1, autor: "João", texto: "Olá pessoal! Como vocês lidam com o tempo de jogo?", data: new Date() },
      { id: 2, autor: "Maria", texto: "Eu uso um timer e faço pausas a cada hora! Tem ajudado bastante.", data: new Date() },
      { id: 3, autor: "Pedro", texto: "Também estabeleci horários fixos para jogar, assim consigo manter uma rotina saudável.", data: new Date() }
    ]
  };

  const [novaMensagem, setNovaMensagem] = useState('');

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Cabeçalho do Grupo */}
        <div className="bg-blue-500 text-white p-6">
          <h2 className="text-2xl font-bold mb-2">{grupo.nome}</h2>
          <p className="text-blue-100">{grupo.descricao}</p>
          <div className="mt-4 flex items-center gap-4">
            <span className="bg-blue-400 px-3 py-1 rounded-full text-sm">
              {grupo.membros} membros
            </span>
            <span className="bg-green-500 px-3 py-1 rounded-full text-sm flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              {grupo.membrosOnline} online
            </span>
          </div>
        </div>

        {/* Área de Mensagens */}
        <div className="h-[500px] overflow-y-auto p-6 bg-gray-50">
          <div className="space-y-4">
            {grupo.mensagens.map(mensagem => (
              <div key={mensagem.id} className="max-w-2xl">
                <div className="bg-white rounded-lg shadow-sm p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      {mensagem.autor[0]}
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">{mensagem.autor}</div>
                      <div className="text-xs text-gray-500">
                        {mensagem.data.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">{mensagem.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Área de Input */}
        <div className="p-4 bg-white border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={novaMensagem}
              onChange={(e) => setNovaMensagem(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
            >
              <span>Enviar</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrupoDetalhe;