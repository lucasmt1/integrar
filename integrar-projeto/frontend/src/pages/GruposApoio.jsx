import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { 
 useGetGruposQuery, 
 useCriarGrupoMutation,
 useEntrarGrupoMutation 
} from '../services/api';
import Loading from '../components/Loading';
import Modal from '../components/Modal';
import { useNavigate } from 'react-router-dom';

function GruposApoio() {
 const [showModal, setShowModal] = useState(false);
 const [novoGrupo, setNovoGrupo] = useState({ nome: '', descricao: '' });
 const user = useSelector(state => state.auth.user);
 const navigate = useNavigate();

 // Dados de exemplo
 const gruposExemplo = [
   {
     id: 1,
     nome: "Jogadores Conscientes",
     descricao: "Grupo para discutir sobre uso saudável de jogos e trocar experiências",
     membros: 12,
     membrosOnline: 3,
     isMembro: false
   },
   {
     id: 2,
     nome: "Amigos da Escola",
     descricao: "Espaço para fazer novas amizades e conversar sobre o dia a dia escolar",
     membros: 8,
     membrosOnline: 2,
     isMembro: false
   },
   {
     id: 3,
     nome: "Superando a Timidez",
     descricao: "Grupo de apoio para desenvolver habilidades sociais juntos",
     membros: 15,
     membrosOnline: 5,
     isMembro: false
   }
 ];

 const { data: grupos = gruposExemplo, isLoading, refetch } = useGetGruposQuery();
 const [criarGrupo] = useCriarGrupoMutation();
 const [entrarGrupo] = useEntrarGrupoMutation();

 const handleCriarGrupo = async (e) => {
   e.preventDefault();
   try {
     await criarGrupo(novoGrupo).unwrap();
     setShowModal(false);
     setNovoGrupo({ nome: '', descricao: '' });
     refetch();
   } catch (error) {
     console.error('Erro ao criar grupo:', error);
   }
 };

 const handleEntrarGrupo = async (grupoId) => {
   try {
     await entrarGrupo(grupoId).unwrap();
     refetch();
   } catch (error) {
     console.error('Erro ao entrar no grupo:', error);
   }
 };

 if (isLoading) return <Loading />;

 return (
   <div className="container mx-auto p-6">
     <div className="flex justify-between items-center mb-6">
       <h2 className="text-2xl font-bold">Grupos de Apoio</h2>
       <button
         onClick={() => setShowModal(true)}
         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
       >
         Criar Novo Grupo
       </button>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {grupos?.map(grupo => (
         <div key={grupo.id} className="bg-white rounded-lg shadow-md overflow-hidden">
           <div className="p-6">
             <h3 className="text-xl font-bold mb-2">{grupo.nome}</h3>
             <p className="text-gray-600 mb-4">{grupo.descricao}</p>
             <div className="flex justify-between items-center">
               <div>
                 <span className="text-sm text-gray-500">
                   {Array.isArray(grupo.membros) ? grupo.membros.length : grupo.membros} membros
                 </span>
                 {grupo.membrosOnline > 0 && (
                   <span className="ml-2 text-sm text-green-500">
                     • {grupo.membrosOnline} online
                   </span>
                 )}
               </div>
               <div className="flex gap-2">
                 {grupo.isMembro ? (
                   <Link
                     to={`/grupos/${grupo.id}`}
                     className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                   >
                     Acessar
                   </Link>
                 ) : (
                   <button
                     onClick={() => navigate(`/grupos/${grupo.id}`)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                   >
                     Participar
                   </button>
                 )}
               </div>
             </div>
           </div>
         </div>
       ))}

       {grupos?.length === 0 && (
         <div className="col-span-full text-center text-gray-500 py-8">
           Nenhum grupo encontrado. Seja o primeiro a criar um!
         </div>
       )}
     </div>

     <Modal 
       isOpen={showModal} 
       onClose={() => setShowModal(false)}
       title="Criar Novo Grupo"
     >
       <form onSubmit={handleCriarGrupo} className="space-y-4">
         <div>
           <label className="block text-sm font-medium text-gray-700 mb-1">
             Nome do Grupo
           </label>
           <input
             type="text"
             value={novoGrupo.nome}
             onChange={(e) => setNovoGrupo({ ...novoGrupo, nome: e.target.value })}
             className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
             required
           />
         </div>
         <div>
           <label className="block text-sm font-medium text-gray-700 mb-1">
             Descrição
           </label>
           <textarea
             value={novoGrupo.descricao}
             onChange={(e) => setNovoGrupo({ ...novoGrupo, descricao: e.target.value })}
             className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
             rows={4}
             required
           />
         </div>
         <div className="flex justify-end gap-2">
           <button
             type="button"
             onClick={() => setShowModal(false)}
             className="px-4 py-2 text-gray-600 hover:text-gray-800"
           >
             Cancelar
           </button>
           <button
             type="submit"
             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
           >
             Criar Grupo
           </button>
         </div>
       </form>
     </Modal>
   </div>
 );
}

export default GruposApoio;