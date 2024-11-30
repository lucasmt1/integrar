import React from 'react';

function ErrorMessage({ error }) {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
      <p>{error}</p>
    </div>
  );
}

export default ErrorMessage;