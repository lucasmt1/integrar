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

function App() {
  const isAuthenticated = useSelector(state => state.auth.token);

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<RotaPrivada><Dashboard /></RotaPrivada>} />
        <Route path="/diario" element={<RotaPrivada><DiarioProgresso /></RotaPrivada>} />
        <Route path="/recursos" element={<RotaPrivada><RecursosAutoajuda /></RotaPrivada>} />
        <Route path="/objetivos" element={<RotaPrivada><ObjetivosPessoais /></RotaPrivada>} />
        <Route path="/recompensas" element={<RotaPrivada><Recompensas /></RotaPrivada>} />
        <Route path="/grupos" element={<RotaPrivada><GruposApoio /></RotaPrivada>} />
        <Route path="/grupos/:id" element={<RotaPrivada><GrupoDetalhe /></RotaPrivada>} />
      </Routes>
    </Router>
  );
}

export default App;