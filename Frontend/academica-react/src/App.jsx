// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Ojo: Importamos con llaves {} porque usamos exportación nombrada en las páginas
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta raíz: Muestra tu formulario de inicio de sesión */}
        <Route path="/" element={<LoginPage />} />

        {/* Ruta del Dashboard: Muestra las tarjetas y la tabla de notas */}
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Comodín de seguridad: Redirige al Login si la ruta no existe */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;