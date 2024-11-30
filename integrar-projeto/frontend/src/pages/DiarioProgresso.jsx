import React, { useState } from 'react';

function DiarioProgresso() {
 const [novaAnotacao, setNovaAnotacao] = useState({
   sentimento: '',
   texto: '',
   tempoJogos: '',
   interacoesSociais: ''
 });

 // Exemplo de registros diários
 const [registros, setRegistros] = useState([
   {
     data: '2024-02-23',
     sentimento: '😊',
     texto: "Hoje consegui conversar com um colega novo durante o intervalo. Foi mais fácil do que eu pensava!",
     tempoJogos: "2h",
     interacoesSociais: "2",
     conquistas: ["Primeira conversa", "Controlei tempo de jogos"]
   }
 ]);

 const sentimentos = ['😊', '😐', '😔', '😰', '😄'];

 const handleSubmit = (e) => {
   e.preventDefault();
   const novoRegistro = {
     ...novaAnotacao,
     data: new Date().toISOString().split('T')[0],
     conquistas: []
   };
   setRegistros([novoRegistro, ...registros]);
   setNovaAnotacao({ sentimento: '', texto: '', tempoJogos: '', interacoesSociais: '' });
 };

 return (
   <div className="container mx-auto p-6">
     <h1 className="text-2xl font-bold mb-6">Meu Diário de Progresso</h1>

     {/* Adicionar Nova Entrada */}
     <div className="bg-white p-6 rounded-lg shadow mb-8">
       <h2 className="text-xl font-bold mb-4">Como foi seu dia hoje?</h2>
       <form onSubmit={handleSubmit}>
         <div className="mb-4">
           <label className="block text-gray-600 mb-2">Como você está se sentindo?</label>
           <div className="flex gap-4">
             {sentimentos.map((sentimento) => (
               <button
                 key={sentimento}
                 type="button"
                 className={`text-2xl p-2 rounded-full hover:bg-gray-100 ${
                   novaAnotacao.sentimento === sentimento ? 'bg-blue-100' : ''
                 }`}
                 onClick={() => setNovaAnotacao({...novaAnotacao, sentimento})}
               >
                 {sentimento}
               </button>
             ))}
           </div>
         </div>

         <div className="mb-4">
           <label className="block text-gray-600 mb-2">Conte sobre seu dia</label>
           <textarea
             value={novaAnotacao.texto}
             onChange={(e) => setNovaAnotacao({...novaAnotacao, texto: e.target.value})}
             className="w-full p-2 border rounded h-32"
             placeholder="Como foi seu dia? O que você conseguiu realizar?"
           />
         </div>

         <div className="grid grid-cols-2 gap-4 mb-4">
           <div>
             <label className="block text-gray-600 mb-2">Tempo jogando hoje</label>
             <input
               type="text"
               value={novaAnotacao.tempoJogos}
               onChange={(e) => setNovaAnotacao({...novaAnotacao, tempoJogos: e.target.value})}
               className="w-full p-2 border rounded"
               placeholder="Ex: 2h"
             />
           </div>
           <div>
             <label className="block text-gray-600 mb-2">Interações sociais</label>
             <input
               type="number"
               value={novaAnotacao.interacoesSociais}
               onChange={(e) => setNovaAnotacao({...novaAnotacao, interacoesSociais: e.target.value})}
               className="w-full p-2 border rounded"
               placeholder="Quantidade de interações"
             />
           </div>
         </div>

         <button
           type="submit"
           className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
         >
           Salvar Registro
         </button>
       </form>
     </div>

     {/* Lista de Registros */}
     <div className="space-y-6">
       {registros.map((registro, index) => (
         <div key={index} className="bg-white p-6 rounded-lg shadow">
           <div className="flex justify-between items-start mb-4">
             <div>
               <span className="text-2xl mr-2">{registro.sentimento}</span>
               <span className="text-gray-500">{registro.data}</span>
             </div>
             <div className="text-right">
               <p className="text-sm text-gray-600">Tempo de jogo: {registro.tempoJogos}</p>
               <p className="text-sm text-gray-600">Interações: {registro.interacoesSociais}</p>
             </div>
           </div>

           <p className="text-gray-700 mb-4">{registro.texto}</p>

           {registro.conquistas?.length > 0 && (
             <div className="mt-4">
               <p className="font-bold text-sm mb-2">Conquistas do dia:</p>
               <div className="flex gap-2">
                 {registro.conquistas.map((conquista, idx) => (
                   <span
                     key={idx}
                     className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded"
                   >
                     {conquista}
                   </span>
                 ))}
               </div>
             </div>
           )}
         </div>
       ))}
     </div>

     {/* Reflexões e Dicas */}
     <div className="mt-8 bg-blue-50 p-6 rounded-lg">
       <h2 className="text-xl font-bold mb-4">Reflexões</h2>
       <p className="text-gray-700">
         Registrar seus progressos diários ajuda a ver o quanto você está evoluindo. 
         Continue anotando seus sentimentos e conquistas!
       </p>
     </div>
   </div>
 );
}

export default DiarioProgresso;