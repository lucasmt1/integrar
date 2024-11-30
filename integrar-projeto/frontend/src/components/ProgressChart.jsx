import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function ProgressChart({ data }) {
  return (
    <div className="w-full h-64">
      <LineChart width={600} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="nivelEstresse" stroke="#8884d8" />
        <Line type="monotone" dataKey="nivelAnsiedade" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

export default ProgressChart;