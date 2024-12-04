import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';

function Navbar() {
 const user = useSelector(state => state.auth.user);
 const dispatch = useDispatch();

 const handleLogout = () => {
   dispatch(logout());
   window.location.href = '/login';
 };

 const getNavItems = (tipo) => {
  switch (tipo) {
    case 'professor':
      return [
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/apoio-professores', label: 'Como Ajudar' },
        { path: '/monitoramento', label: 'Monitoramento' },
        { path: '/relatorios', label: 'Relatórios' },
      ];
   
    case 'pais':
      return [
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/apoio-pais', label: 'Como Ajudar' },
        { path: '/monitoramento', label: 'Monitoramento' },
      ];

    default: // aluno
      return [
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/grupos', label: 'Grupos' },
        { path: '/diario', label: 'Diário' },
        { path: '/recursos', label: 'Recursos' },
        { path: '/objetivos', label: 'Objetivos' },
        { path: '/recompensas', label: 'Recompensas' }
      ];
  }
};

 return (
   <nav className="bg-white shadow-lg">
     <div className="container mx-auto px-6 py-3">
       <div className="flex items-center justify-between">
         <div className="flex items-center">
           <Link to="/dashboard" className="text-xl font-bold text-blue-600">
             INTEGRAR
           </Link>
         </div>

         <div className="flex space-x-4">
           {getNavItems(user?.tipo_usuario).map(item => (
             <NavLink
               key={item.path}
               to={item.path}
               className={({ isActive }) =>
                 `px-3 py-2 rounded-md text-sm font-medium ${
                   isActive 
                     ? 'bg-blue-500 text-white' 
                     : 'text-gray-700 hover:bg-blue-100'
                 }`
               }
             >
               {item.label}
             </NavLink>
           ))}
         </div>

         <div className="flex items-center gap-4">
           <div className="text-sm">
             <span className="text-gray-700">Olá, </span>
             <span className="font-medium text-blue-600">{user?.nome}</span>
           </div>
           <button
             onClick={handleLogout}
             className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600 transition-colors"
           >
             Sair
           </button>
         </div>
       </div>
     </div>
   </nav>
 );
}

export default Navbar;