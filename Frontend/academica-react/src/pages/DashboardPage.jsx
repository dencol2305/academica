import React from 'react';
import { ResumenCards } from '../features/dashboard/ResumenCards';
import { NotasRecientes } from '../features/dashboard/NotasRecientes';

export const DashboardPage = () => {
  return (
    <div style={{ padding: '10px' }}>
      <h1 style={{ 
        fontSize: '28px', 
        color: '#111827', 
        fontWeight: 'bold', 
        marginBottom: '25px',
        fontFamily: 'sans-serif'
      }}>
        Resumen académico
      </h1>
      
      {/* Componente de las 3 tarjetas de indicadores */}
      <ResumenCards />
      
      {/* Componente de la tabla informativa de calificaciones */}
      <div style={{ maxWidth: '600px' }}>
        <NotasRecientes />
      </div>
    </div>
  );
};