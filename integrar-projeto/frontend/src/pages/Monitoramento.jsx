import React from 'react';
import { useSelector } from 'react-redux';

function Monitoramento() {
  const user = useSelector(state => state.auth.user);

  // Conteúdo para professores
  if (user?.tipo_usuario === 'professor') {
    return (
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Monitoramento da Turma</h2>
        
        <div className="grid grid-cols-1 gap-6">
          {/* Lista de Alunos */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Alunos em Acompanhamento</h3>
            
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold">João Silva</h4>
                    <p className="text-sm text-gray-600">Último acesso: hoje</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                    Atenção
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <p>Tempo em jogos: 4h/dia (acima do recomendado)</p>
                  <p>Participação em grupos: baixa</p>
                </div>
              </div>

              <div className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold">Maria Santos</h4>
                    <p className="text-sm text-gray-600">Último acesso: ontem</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                    Regular
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <p>Tempo em jogos: 2h/dia</p>
                  <p>Participação em grupos: ativa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Estatísticas Gerais */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Estatísticas da Turma</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">Média de Uso de Jogos</p>
                <p className="text-2xl font-bold text-blue-900">2.5h/dia</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">Participação em Grupos</p>
                <p className="text-2xl font-bold text-green-900">75%</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">Casos de Atenção</p>
                <p className="text-2xl font-bold text-yellow-900">3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Conteúdo para pais
  if (user?.tipo_usuario === 'pais') {
    return (
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Monitoramento do seu Filho</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Uso de Jogos */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Tempo de Jogos</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-lg font-semibold">Hoje</p>
                <p className="text-3xl font-bold text-blue-600">2h 30min</p>
              </div>
              <div>
                <p className="font-medium">Histórico da Semana:</p>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Segunda</span>
                    <span>2h 15min</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Terça</span>
                    <span>1h 45min</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Quarta</span>
                    <span>2h 30min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progresso Social */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Interação Social</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">Participação em Grupos:</p>
                <div className="bg-green-50 p-3 rounded">
                  <p>Grupos Ativos: 2</p>
                  <p>Mensagens esta semana: 15</p>
                  <p>Nível de Engajamento: Moderado</p>
                </div>
              </div>
              <div>
                <p className="font-medium mb-2">Atividades Concluídas:</p>
                <div className="bg-yellow-50 p-3 rounded">
                  <p>Desafios: 3/5</p>
                  <p>Objetivos Semanais: 2/3</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recomendações */}
          <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Recomendações</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p>O tempo de jogo está dentro do limite recomendado</p>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <p>Sugestão: Incentive a participação em mais atividades em grupo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Redirecionar ou mostrar mensagem se for aluno
  return (
    <div className="container mx-auto p-6 text-center">
      <p className="text-lg text-gray-600">
        Esta página não está disponível para alunos.
      </p>
    </div>
  );
}

export default Monitoramento;