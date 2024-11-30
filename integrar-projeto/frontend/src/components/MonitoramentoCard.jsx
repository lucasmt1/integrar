import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

function MonitoramentoCard() {
  const { data, isLoading } = useGetMonitoramentoQuery();

  if (isLoading) return <Loading />;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Monitoramento Emocional</h3>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-gray-600">Nível de Estresse</p>
          <p className="text-2xl font-bold">{data?.nivelEstresse || 0}/10</p>
        </div>
        <div>
          <p className="text-gray-600">Nível de Ansiedade</p>
          <p className="text-2xl font-bold">{data?.nivelAnsiedade || 0}/10</p>
        </div>
      </div>
      {data?.historico && (
        <div className="h-48">
          <LineChart width={400} height={200} data={data.historico}>
            <XAxis dataKey="data" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="estresse" stroke="#ef4444" />
            <Line type="monotone" dataKey="ansiedade" stroke="#3b82f6" />
          </LineChart>
        </div>
      )}
    </div>
  );
}

export default MonitoramentoCard;