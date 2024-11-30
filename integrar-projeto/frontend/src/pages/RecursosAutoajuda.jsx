import React, { useState } from 'react';

function RecursosAutoajuda() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('ansiedade');

  const recursos = {
    ansiedade: [
      {
        titulo: "Respiração Controlada",
        descricao: "Técnica simples para momentos de ansiedade",
        passos: [
          "Inspire profundamente por 4 segundos",
          "Segure por 4 segundos",
          "Expire por 4 segundos",
          "Repita 5 vezes"
        ],
        icone: "🫁"
      },
      {
        titulo: "Lugar Seguro",
        descricao: "Visualização para acalmar",
        passos: [
          "Encontre um lugar quieto",
          "Feche os olhos",
          "Imagine seu lugar favorito",
          "Foque nos detalhes"
        ],
        icone: "🏠"
      }
    ],
    jogos: [
      {
        titulo: "Tempo Controlado",
        descricao: "Dicas para controlar o tempo de jogo",
        passos: [
          "Use um timer",
          "Faça pausas a cada hora",
          "Defina horários fixos",
          "Tenha outras atividades planejadas"
        ],
        icone: "⏰"
      }
    ],
    social: [
      {
        titulo: "Primeiros Contatos",
        descricao: "Como iniciar conversas",
        passos: [
          "Comece com um simples 'oi'",
          "Faça perguntas simples",
          "Mostre interesse",
          "Seja você mesmo"
        ],
        icone: "👋"
      }
    ]
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Recursos de Autoajuda</h1>

      {/* Menu de Categorias */}
      <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
        <button
          onClick={() => setCategoriaAtiva('ansiedade')}
          className={`px-4 py-2 rounded-full ${
            categoriaAtiva === 'ansiedade' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Controle de Ansiedade
        </button>
        <button
          onClick={() => setCategoriaAtiva('jogos')}
          className={`px-4 py-2 rounded-full ${
            categoriaAtiva === 'jogos' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Uso de Jogos
        </button>
        <button
          onClick={() => setCategoriaAtiva('social')}
          className={`px-4 py-2 rounded-full ${
            categoriaAtiva === 'social' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Habilidades Sociais
        </button>
      </div>

      {/* Conteúdo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recursos[categoriaAtiva].map((recurso, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{recurso.icone}</span>
                <h3 className="text-xl font-bold">{recurso.titulo}</h3>
              </div>
              <p className="text-gray-600 mb-4">{recurso.descricao}</p>
              <div className="space-y-2">
                {recurso.passos.map((passo, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <p className="text-sm">{passo}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t">
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Praticar Agora
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Dica do Dia */}
      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">💡</span>
          <h2 className="text-xl font-bold">Dica do Dia</h2>
        </div>
        <p className="text-gray-700">
          Lembre-se: pequenos passos levam a grandes mudanças. 
          Comece com uma meta pequena hoje!
        </p>
      </div>

      {/* Contato de Emergência */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Precisa de Ajuda?</h2>
        <p className="text-gray-600">
          Se você estiver se sentindo muito ansioso ou precisando conversar, 
          não hesite em buscar ajuda:
        </p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <p>Converse com um professor de confiança</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <p>Fale com seus pais ou responsáveis</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <p>Procure apoio dos colegas nos grupos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecursosAutoajuda;