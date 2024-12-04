import React from 'react';
import { useNavigate } from 'react-router-dom';

function ApoioProfessores() {
  const navigate = useNavigate();


  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Como Ajudar Seus Alunos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sinais de Alerta */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Sinais para Observar</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Isolamento durante atividades em grupo</li>
            <li>• Dificuldade em apresentar trabalhos</li>
            <li>• Ausências frequentes</li>
            <li>• Baixa participação em atividades sociais</li>
          </ul>
        </div>

        {/* Como Ajudar */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Como Intervir</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Crie um ambiente acolhedor e seguro</li>
            <li>• Incentive participação gradual</li>
            <li>• Ofereça atividades em pequenos grupos</li>
            <li>• Comunique-se com os pais regularmente</li>
          </ul>
        </div>

        {/* Recursos */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Recursos Disponíveis</h3>
          <div className="space-y-2">
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Material de Apoio
            </button>
            <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Contatar Equipe de Suporte
            </button>
          </div>
        </div>

        {/* Monitoramento */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Acompanhamento</h3>
          <p className="text-gray-600 mb-4">
            Use nossa plataforma para monitorar o progresso e interações sociais dos alunos.
          </p>
          <button 
            onClick={() => navigate('/monitoramento')} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Acessar Monitoramento
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApoioProfessores;