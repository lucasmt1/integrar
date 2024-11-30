// frontend/src/components/CheckInDiario.jsx
import React, { useState } from 'react';
import { useSalvarMonitoramentoMutation } from '../services/api';

function CheckInDiario() {
  const [humor, setHumor] = useState('normal');
  const [ansiedade, setAnsiedade] = useState('baixa');
  const [salvarCheckIn] = useSalvarMonitoramentoMutation();

  const humores = [
    { valor: 'otimo', emoji: '😄', label: 'Ótimo' },
    { valor: 'bom', emoji: '🙂', label: 'Bom' },
    { valor: 'normal', emoji: '😐', label: 'Normal' },
    { valor: 'triste', emoji: '😔', label: 'Triste' },
    { valor: 'ansioso', emoji: '😰', label: 'Ansioso' }
  ];

  const handleSubmit = async () => {
    try {
      await salvarCheckIn({
        humor,
        ansiedade,
        data: new Date().toISOString()
      }).unwrap();
      
      alert('Check-in realizado com sucesso!');
    } catch (error) {
      alert('Erro ao salvar check-in');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4">Como você está hoje?</h3>
      
      <div className="mb-6">
        <p className="mb-2">Humor</p>
        <div className="flex gap-4">
          {humores.map(h => (
            <button
              key={h.valor}
              onClick={() => setHumor(h.valor)}
              className={`p-2 rounded ${
                humor === h.valor ? 'bg-blue-100 border-2 border-blue-500' : 'bg-gray-100'
              }`}
            >
              <span className="text-2xl">{h.emoji}</span>
              <p className="text-sm">{h.label}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="mb-2">Nível de Ansiedade</p>
        <select
          value={ansiedade}
          onChange={(e) => setAnsiedade(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="baixa">Baixa</option>
          <option value="media">Média</option>
          <option value="alta">Alta</option>
        </select>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Salvar Check-in
      </button>
    </div>
  );
}

export default CheckInDiario;