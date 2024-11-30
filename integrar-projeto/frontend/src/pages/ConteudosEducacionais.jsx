import React, { useState } from 'react';
import { useGetConteudosQuery } from '../services/api';
import Loading from '../components/Loading';

function ConteudosEducacionais() {
  const [categoria, setCategoria] = useState('todos');
  const { data: conteudos, isLoading } = useGetConteudosQuery(categoria);

  const categorias = [
    { value: 'todos', label: 'Todos' },
    { value: 'saude_mental', label: 'Saúde Mental' },
    { value: 'regulacao_emocional', label: 'Regulação Emocional' },
    { value: 'habilidades_sociais', label: 'Habilidades Sociais' }
  ];

  if (isLoading) return <Loading />;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Conteúdos Educacionais</h2>

      <div className="mb-6">
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="p-2 border rounded w-48"
        >
          {categorias.map(cat => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {conteudos?.map(conteudo => (
          <div key={conteudo.id} className="bg-white rounded shadow">
            <div className="aspect-w-16 aspect-h-9">
              {conteudo.thumbnail && (
                <img
                  src={conteudo.thumbnail}
                  alt={conteudo.titulo}
                  className="object-cover w-full h-48 rounded-t"
                />
              )}
            </div>
            <div className="p-4">
              <h3 className="text-xl mb-2">{conteudo.titulo}</h3>
              <p className="text-gray-600 mb-4">{conteudo.descricao}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {conteudo.tipo}
                </span>
                <button 
                  onClick={() => window.open(conteudo.url, '_blank')}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Acessar
                </button>
              </div>
            </div>
          </div>
        ))}

        {conteudos?.length === 0 && (
          <div className="col-span-full text-center text-gray-500">
            Nenhum conteúdo encontrado para esta categoria.
          </div>
        )}
      </div>
    </div>
  );
}

export default ConteudosEducacionais;