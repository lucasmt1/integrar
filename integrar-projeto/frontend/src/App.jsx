import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Dashboard from './pages/Dashboard';
import DiarioProgresso from './pages/DiarioProgresso';
import RecursosAutoajuda from './pages/RecursosAutoajuda';
import ObjetivosPessoais from './pages/ObjetivosPessoais';
import Recompensas from './pages/Recompensas';
import GruposApoio from './pages/GruposApoio';
import GrupoDetalhe from './pages/GrupoDetalhe';
import RotaPrivada from './components/RotaPrivada';
import ApoioProfessores from './pages/ApoioProfessores';
import ApoioPais from './pages/ApoioPais';
import Monitoramento from './pages/Monitoramento';
import ConteudosEducacionais from './pages/ConteudosEducacionais';

function App() {
  const isAuthenticated = useSelector(state => state.auth.token);
  const user = useSelector(state => state.auth.user);

  // Proteger rotas baseado no tipo de usuário
  const podeAcessar = (tipoUsuario) => {
    if (!user) return false;
    if (tipoUsuario === 'aluno') return user.tipo_usuario === 'aluno';
    if (tipoUsuario === 'professor') return user.tipo_usuario === 'professor';
    if (tipoUsuario === 'pais') return user.tipo_usuario === 'pais';
    return true;
  };

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Rotas comuns protegidas */}
        <Route path="/dashboard" element={<RotaPrivada><Dashboard /></RotaPrivada>} />
        <Route path="/grupos" element={<RotaPrivada><GruposApoio /></RotaPrivada>} />
        <Route path="/grupos/:id" element={<RotaPrivada><GrupoDetalhe /></RotaPrivada>} />

        {/* Rotas específicas para alunos */}
        <Route 
          path="/diario" 
          element={
            <RotaPrivada>
              {podeAcessar('aluno') ? <DiarioProgresso /> : <Navigate to="/dashboard" />}
            </RotaPrivada>
          } 
        />
        <Route 
          path="/recursos" 
          element={
            <RotaPrivada>
              {podeAcessar('aluno') ? <RecursosAutoajuda /> : <Navigate to="/dashboard" />}
            </RotaPrivada>
          } 
        />
        <Route 
          path="/objetivos" 
          element={
            <RotaPrivada>
              {podeAcessar('aluno') ? <ObjetivosPessoais /> : <Navigate to="/dashboard" />}
            </RotaPrivada>
          } 
        />
        <Route 
          path="/recompensas" 
          element={
            <RotaPrivada>
              {podeAcessar('aluno') ? <Recompensas /> : <Navigate to="/dashboard" />}
            </RotaPrivada>
          } 
        />

        {/* Rotas para professores e pais */}
        <Route 
          path="/monitoramento" 
          element={
            <RotaPrivada>
              {(podeAcessar('professor') || podeAcessar('pais')) ? <Monitoramento /> : <Navigate to="/dashboard" />}
            </RotaPrivada>
          } 
        />
        <Route 
          path="/conteudos" 
          element={
            <RotaPrivada>
              {(podeAcessar('professor') || podeAcessar('pais')) ? <ConteudosEducacionais /> : <Navigate to="/dashboard" />}
            </RotaPrivada>
          } 
        />

        {/* Rotas específicas para professor */}
        <Route 
          path="/apoio-professores" 
          element={
            <RotaPrivada>
              {podeAcessar('professor') ? <ApoioProfessores /> : <Navigate to="/dashboard" />}
            </RotaPrivada>
          } 
        />

        {/* Rotas específicas para pais */}
        <Route 
          path="/apoio-pais" 
          element={
            <RotaPrivada>
              {podeAcessar('pais') ? <ApoioPais /> : <Navigate to="/dashboard" />}
            </RotaPrivada>
          } 
        />

        {/* Rota padrão */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;