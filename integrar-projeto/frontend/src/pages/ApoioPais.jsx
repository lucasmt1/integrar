function ApoioPais() {
    return (
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Como Ajudar Seu Filho</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Entendendo os Sinais */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">O que Observar</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Muito tempo jogando sozinho</li>
              <li>• Evita eventos sociais ou familiares</li>
              <li>• Ansiedade em situações sociais</li>
              <li>• Alterações no sono ou alimentação</li>
            </ul>
          </div>
  
          {/* Suporte */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Como Dar Suporte</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Estabeleça horários para jogos e estudos</li>
              <li>• Incentive atividades sociais graduais</li>
              <li>• Mantenha diálogo aberto e acolhedor</li>
              <li>• Participe de algumas sessões de jogos</li>
            </ul>
          </div>
  
          {/* Limites Saudáveis */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Estabelecendo Limites</h3>
            <div className="space-y-2 text-gray-600">
              <p>• Defina horários específicos para jogos</p>
              <p>• Alterne entre atividades online e offline</p>
              <p>• Crie metas e recompensas</p>
              <p>• Mantenha rotinas consistentes</p>
            </div>
          </div>
  
          {/* Recursos */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Recursos para Pais</h3>
            <div className="space-y-2">
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Guia para Pais
              </button>
              <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ApoioPais;