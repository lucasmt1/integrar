import React, { useState } from 'react';
import { 
  useGetMonitoramentoQuery, 
  useSalvarMonitoramentoMutation 
} from '../services/api';
import Loading from '../components/Loading';
import ProgressChart from '../components/ProgressChart';

function MonitoramentoEmocional() {
  const [nivelEstresse, setNivelEstresse] = useState(5);
  const [nivelAnsiedade, setNivelAnsiedade] = useState(5);
  const { data: historico, isLoading } = useGetMonitoramentoQuery();
  const [salvarMonitoramento] = useSalvarMonitoramentoMutation();

  const handleSalvarRegistro = async () => {
    try {
      await salvarMonitoramento({
        nivelEstresse,
        nivelAnsiedade
      }).unwrap();
      alert('Registro salvo com sucesso!');
    } catch (error) {
      alert('Erro ao salvar registro');
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl mb-6">Monitoramento Emocional</h2>
      
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-2">Nível de Estresse (0-10)</label>
          <input 
            type="range" 
            min="0" 
            max="10" 
            value={nivelEstresse}
            onChange={(e) => setNivelEstresse(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-center block">{nivelEstresse}</span>
        </div>
        <div>
          <label className="block mb-2">Nível de Ansiedade (0-10)</label>
          <input 
            type="range" 
            min="0" 
            max="10" 
            value={nivelAnsiedade}
            onChange={(e) => setNivelAnsiedade(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-center block">{nivelAnsiedade}</span>
        </div>
      </div>

      <button 
        onClick={handleSalvarRegistro}
        className="mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Salvar Registro
      </button>

      {historico && (
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl mb-4">Histórico de Registros</h3>
          <ProgressChart data={historico} />
        </div>
      )}
    </div>
  );
}

export default MonitoramentoEmocional;