import React from 'react';

function Alertas({ alertas = [], onDismiss }) {
  if (!alertas.length) return null;

  return (
    <div className="fixed bottom-4 right-4 w-80">
      {alertas.map((alerta, index) => (
        <div 
          key={index}
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-2 rounded shadow-lg flex justify-between items-start"
        >
          <div>
            <p className="font-bold">{alerta.titulo}</p>
            <p>{alerta.mensagem}</p>
          </div>
          <button 
            onClick={() => onDismiss(alerta.id)}
            className="text-red-500 hover:text-red-700"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}

export default Alertas;