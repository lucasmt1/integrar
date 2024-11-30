// frontend/src/pages/Cadastro.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCadastroMutation } from '../services/api';

function Cadastro() {
 const [formData, setFormData] = useState({
   nome: '',
   email: '',
   senha: '',
   confirmarSenha: '',
   tipo_usuario: ''
 });
 const [erro, setErro] = useState('');
 const [cadastro, { isLoading }] = useCadastroMutation();
 const navigate = useNavigate();

 const handleSubmit = async (e) => {
   e.preventDefault();
   setErro('');

   if (formData.senha !== formData.confirmarSenha) {
     setErro('As senhas não coincidem');
     return;
   }

   try {
     await cadastro({
       nome: formData.nome,
       email: formData.email,
       senha: formData.senha,
       tipo_usuario: formData.tipo_usuario
     }).unwrap();

     alert('Cadastro realizado com sucesso!');
     navigate('/login');
   } catch (error) {
     setErro(error.data?.mensagem || 'Erro ao realizar cadastro');
   }
 };

 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData(prev => ({
     ...prev,
     [name]: value
   }));
 };

 return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
     <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
       <div className="mb-6 text-center">
         <h1 className="text-3xl font-bold text-gray-900">Cadastro INTEGRAR</h1>
         <p className="text-gray-600 mt-2">Crie sua conta para começar</p>
       </div>

       {erro && (
         <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
           {erro}
         </div>
       )}

       <form onSubmit={handleSubmit}>
         <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2">
             Nome Completo
           </label>
           <input
             type="text"
             name="nome"
             value={formData.nome}
             onChange={handleChange}
             className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
             required
           />
         </div>

         <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2">
             Email
           </label>
           <input
             type="email"
             name="email"
             value={formData.email}
             onChange={handleChange}
             className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
             required
           />
         </div>

         <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2">
             Senha
           </label>
           <input
             type="password"
             name="senha"
             value={formData.senha}
             onChange={handleChange}
             className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
             required
           />
         </div>

         <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2">
             Confirmar Senha
           </label>
           <input
             type="password"
             name="confirmarSenha"
             value={formData.confirmarSenha}
             onChange={handleChange}
             className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
             required
           />
         </div>

         <div className="mb-6">
           <label className="block text-gray-700 text-sm font-bold mb-2">
             Tipo de Usuário
           </label>
           <select
             name="tipo_usuario"
             value={formData.tipo_usuario}
             onChange={handleChange}
             className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
             required
           >
             <option value="">Selecione...</option>
             <option value="aluno">Aluno</option>
             <option value="professor">Professor</option>
             <option value="pais">Pais</option>
           </select>
         </div>

         <button
           type="submit"
           disabled={isLoading}
           className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200 disabled:bg-blue-300"
         >
           {isLoading ? 'Cadastrando...' : 'Cadastrar'}
         </button>

         <div className="mt-4 text-center">
           <p className="text-gray-600">
             Já tem uma conta?{' '}
             <a href="/login" className="text-blue-500 hover:text-blue-600">
               Faça login
             </a>
           </p>
         </div>
       </form>
     </div>
   </div>
 );
}

export default Cadastro;