import React, { useState } from 'react';

function ObjetivosPessoais() {
 const [objetivos, setObjetivos] = useState({
   tempoJogos: {
     atual: 4,
     meta: 2,
     unidade: 'horas/dia'
   },
   interacoesSociais: {
     atual: 1,
     meta: 3,
     unidade: 'por dia'
   }
 });

 const [metasSemanais, setMetasSemanais] = useState([
   {
     id: 1,
     descricao: "Participar de uma atividade em grupo",
     status: "pendente",
     prazo: "Esta semana",
     categoria: "social"
   },
   {
     id: 2,
     descricao: "Reduzir tempo de jogo em 30 minutos",
     status: "completo",
     prazo: "Esta semana",
     categoria: "jogos"
   }
 ]);

 const [showNovaMetaModal, setShowNovaMetaModal] = useState(false);
 const [novaMeta, setNovaMeta] = useState({
   descricao: '',
   prazo: '',
   categoria: 'social'
 });

 const [showAjusteModal, setShowAjusteModal] = useState(false);
 const [ajusteAtivo, setAjusteAtivo] = useState(null);

 // Funções de manipulação
 const toggleMetaStatus = (id) => {
   setMetasSemanais(metas => metas.map(meta => 
     meta.id === id 
       ? { ...meta, status: meta.status === 'completo' ? 'pendente' : 'completo' }
       : meta
   ));
 };

 const adicionarNovaMeta = () => {
   if (!novaMeta.descricao) return;
   
   setMetasSemanais(metas => [...metas, {
     id: metas.length + 1,
     ...novaMeta,
     status: 'pendente'
   }]);
   
   setNovaMeta({ descricao: '', prazo: '', categoria: 'social' });
   setShowNovaMetaModal(false);
 };

 const ajustarMeta = (tipo) => {
   setObjetivos(prev => ({
     ...prev,
     [tipo]: {
       ...prev[tipo],
       meta: ajusteAtivo.novaMetaValor
     }
   }));
   setShowAjusteModal(false);
 };

 return (
   <div className="container mx-auto p-6">
     <h1 className="text-2xl font-bold mb-6">Meus Objetivos</h1>

     {/* Progresso Atual */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
       <div className="bg-white p-6 rounded-lg shadow">
         <h2 className="text-xl font-bold mb-4">Tempo de Jogos</h2>
         <div className="space-y-4">
           <div>
             <div className="flex justify-between mb-1">
               <span>Meta Diária</span>
               <span className="text-blue-600">{objetivos.tempoJogos.atual}/{objetivos.tempoJogos.meta}h</span>
             </div>
             <div className="w-full bg-gray-200 rounded-full h-2">
               <div 
                 className="bg-blue-500 h-2 rounded-full"
                 style={{ width: `${Math.min((objetivos.tempoJogos.atual / objetivos.tempoJogos.meta) * 100, 100)}%` }}
               ></div>
             </div>
           </div>
           <button 
             onClick={() => {
               setAjusteAtivo({ tipo: 'tempoJogos', novaMetaValor: objetivos.tempoJogos.meta });
               setShowAjusteModal(true);
             }}
             className="text-blue-500 text-sm hover:text-blue-600"
           >
             Ajustar Meta
           </button>
         </div>
       </div>

       <div className="bg-white p-6 rounded-lg shadow">
         <h2 className="text-xl font-bold mb-4">Interações Sociais</h2>
         <div className="space-y-4">
           <div>
             <div className="flex justify-between mb-1">
               <span>Meta Diária</span>
               <span className="text-green-600">
                 {objetivos.interacoesSociais.atual}/{objetivos.interacoesSociais.meta}
               </span>
             </div>
             <div className="w-full bg-gray-200 rounded-full h-2">
               <div 
                 className="bg-green-500 h-2 rounded-full"
                 style={{ width: `${Math.min((objetivos.interacoesSociais.atual / objetivos.interacoesSociais.meta) * 100, 100)}%` }}
               ></div>
             </div>
           </div>
           <button 
             onClick={() => {
               setAjusteAtivo({ tipo: 'interacoesSociais', novaMetaValor: objetivos.interacoesSociais.meta });
               setShowAjusteModal(true);
             }}
             className="text-green-500 text-sm hover:text-green-600"
           >
             Ajustar Meta
           </button>
         </div>
       </div>
     </div>

     {/* Metas Semanais */}
     <div className="bg-white p-6 rounded-lg shadow mb-8">
       <h2 className="text-xl font-bold mb-4">Metas da Semana</h2>
       <div className="space-y-4">
         {metasSemanais.map(meta => (
           <div 
             key={meta.id}
             className="flex items-center justify-between p-4 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
           >
             <div className="flex items-center gap-3">
               <input 
                 type="checkbox"
                 checked={meta.status === 'completo'}
                 onChange={() => toggleMetaStatus(meta.id)}
                 className="h-5 w-5 rounded cursor-pointer"
               />
               <div>
                 <p className={meta.status === 'completo' ? 'line-through text-gray-500' : ''}>
                   {meta.descricao}
                 </p>
                 <p className="text-sm text-gray-500">{meta.prazo}</p>
               </div>
             </div>
             <span className={`text-sm px-2 py-1 rounded ${
               meta.categoria === 'social' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
             }`}>
               {meta.categoria}
             </span>
           </div>
         ))}
       </div>

       <button 
         onClick={() => setShowNovaMetaModal(true)}
         className="mt-4 flex items-center gap-2 text-blue-500 hover:text-blue-600"
       >
         <span>+</span>
         <span>Adicionar Nova Meta</span>
       </button>
     </div>

     {/* Dicas e Sugestões */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <div className="bg-white p-6 rounded-lg shadow">
         <h2 className="text-xl font-bold mb-4">Dicas para Alcançar seus Objetivos</h2>
         <div className="space-y-3">
           <div className="flex items-start gap-2">
             <span className="text-green-500">✓</span>
             <p>Comece com metas pequenas e alcançáveis</p>
           </div>
           <div className="flex items-start gap-2">
             <span className="text-green-500">✓</span>
             <p>Celebre cada progresso, mesmo que pequeno</p>
           </div>
           <div className="flex items-start gap-2">
             <span className="text-green-500">✓</span>
             <p>Use o sistema de recompensas para se motivar</p>
           </div>
         </div>
       </div>

       <div className="bg-white p-6 rounded-lg shadow">
         <h2 className="text-xl font-bold mb-4">Sugestões de Atividades</h2>
         <div className="space-y-3">
           <div className="p-3 bg-blue-50 rounded">
             <h3 className="font-bold">Clube de Jogos</h3>
             <p className="text-sm text-gray-600">
               Encontre outros jogadores e faça amizades
             </p>
           </div>
           <div className="p-3 bg-green-50 rounded">
             <h3 className="font-bold">Grupo de Estudos</h3>
             <p className="text-sm text-gray-600">
               Combine jogos e socialização com estudos
             </p>
           </div>
         </div>
       </div>
     </div>

     {/* Modal Nova Meta */}
     {showNovaMetaModal && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
         <div className="bg-white p-6 rounded-lg w-full max-w-md">
           <h3 className="text-xl font-bold mb-4">Nova Meta</h3>
           <div className="space-y-4">
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">
                 Descrição
               </label>
               <input
                 type="text"
                 value={novaMeta.descricao}
                 onChange={(e) => setNovaMeta(prev => ({ ...prev, descricao: e.target.value }))}
                 className="w-full p-2 border rounded"
               />
             </div>
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">
                 Prazo
               </label>
               <input
                 type="text"
                 value={novaMeta.prazo}
                 onChange={(e) => setNovaMeta(prev => ({ ...prev, prazo: e.target.value }))}
                 className="w-full p-2 border rounded"
                 placeholder="Ex: Esta semana"
               />
             </div>
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">
                 Categoria
               </label>
               <select
                 value={novaMeta.categoria}
                 onChange={(e) => setNovaMeta(prev => ({ ...prev, categoria: e.target.value }))}
                 className="w-full p-2 border rounded"
               >
                 <option value="social">Social</option>
                 <option value="jogos">Jogos</option>
               </select>
             </div>
           </div>
           <div className="mt-6 flex justify-end gap-2">
             <button
               onClick={() => setShowNovaMetaModal(false)}
               className="px-4 py-2 text-gray-600 hover:text-gray-800"
             >
               Cancelar
             </button>
             <button
               onClick={adicionarNovaMeta}
               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
             >
               Adicionar
             </button>
           </div>
         </div>
       </div>
     )}

     {/* Modal Ajuste Meta */}
     {showAjusteModal && ajusteAtivo && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
         <div className="bg-white p-6 rounded-lg w-full max-w-md">
           <h3 className="text-xl font-bold mb-4">
             Ajustar Meta de {ajusteAtivo.tipo === 'tempoJogos' ? 'Tempo de Jogos' : 'Interações Sociais'}
           </h3>
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">
               Nova Meta
             </label>
             <input
               type="number"
               value={ajusteAtivo.novaMetaValor}
               onChange={(e) => setAjusteAtivo(prev => ({ ...prev, novaMetaValor: parseFloat(e.target.value) }))}
               className="w-full p-2 border rounded"
               min="1"
               step="0.5"
             />
           </div>
           <div className="mt-6 flex justify-end gap-2">
             <button
               onClick={() => setShowAjusteModal(false)}
               className="px-4 py-2 text-gray-600 hover:text-gray-800"
             >
               Cancelar
             </button>
             <button
               onClick={() => ajustarMeta(ajusteAtivo.tipo)}
               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
             >
               Salvar
             </button>
           </div>
         </div>
       </div>
     )}
   </div>
 );
}

export default ObjetivosPessoais;