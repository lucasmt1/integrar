import React from 'react';

function RecursosEducativos() {
  const recursos = [
    {
      titulo: "Identificando Sinais de Fobia Social",
      conteudo: [
        "Isolamento excessivo",
        "Evitar atividades sociais",
        "Ansiedade em situações de grupo",
        "Dificuldade para fazer amigos"
      ],
      dicas: [
        "Mantenha diálogo aberto",
        "Não force situações sociais",
        "Busque ajuda profissional quando necessário",
        "Celebre pequenos progressos"
      ]
    },
    {
      titulo: "Uso Saudável de Jogos Eletrônicos",
      conteudo: [
        "Estabeleça limites de tempo",
        "Crie horários específicos para jogos",
        "Monitore o tipo de jogos",
        "Balance com atividades offline"
      ]
    },
    {
      titulo: "Apoiando o Desenvolvimento Social",
      conteudo: [
        "Incentive atividades em grupo",
        "Participe de eventos escolares",
        "Crie ambiente seguro para socialização",
        "Desenvolva habilidades de comunicação"
      ]
    },
    {
        titulo: "Saúde Mental e Bem-estar",
        conteudo: [
          "Como reconhecer sinais de ansiedade",
          "Técnicas de respiração para acalmar",
          "Estabelecendo rotinas saudáveis",
          "Promovendo autoestima"
        ],
        atividades: [
          "Diário de gratidão em família",
          "Exercícios de mindfulness",
          "Momentos de conversa diária",
          "Atividades físicas em conjunto"
        ]
      },
      {
        titulo: "Regulação Emocional",
        conteudo: [
          "Identificando emoções",
          "Expressando sentimentos de forma saudável",
          "Lidando com frustrações",
          "Desenvolvendo resiliência"
        ]
      },
      {
        titulo: "Guia de Comunicação",
        conteudo: [
          "Escuta ativa",
          "Diálogo sem julgamentos",
          "Estabelecendo limites saudáveis",
          "Resolvendo conflitos"
        ],
        recursos: [
          "Vídeos educativos",
          "Artigos especializados",
          "Exercícios práticos",
          "Grupos de discussão"
        ]
      }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Recursos para Pais</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recursos.map((recurso, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 text-blue-600">
              {recurso.titulo}
            </h2>
            
            <div className="space-y-4">
              {recurso.conteudo.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            {recurso.dicas && (
              <div className="mt-6">
                <h3 className="font-bold text-green-600 mb-2">Dicas Práticas:</h3>
                {recurso.dicas.map((dica, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <p>{dica}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecursosEducativos;