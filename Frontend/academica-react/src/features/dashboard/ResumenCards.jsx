import React from 'react';

export const ResumenCards = () => {
  // Datos simulados basados en el prototipo visual del instructor
  const tarjetas = [
    { id: 1, titulo: 'Alumnos', valor: 30, colorBg: '#EBF3FC', colorTexto: '#1E40AF' },
    { id: 2, titulo: 'Materias', valor: 10, colorBg: '#EBF3FC', colorTexto: '#1E40AF' },
    { id: 3, titulo: 'Aprobadas', valor: 56, colorBg: '#EBF3FC', colorTexto: '#1E40AF' }
  ];

  return (
    <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
      {tarjetas.map((card) => (
        <div 
          key={card.id} 
          style={{
            backgroundColor: card.colorBg,
            border: '1px solid #BFDBFE',
            borderRadius: '12px',
            padding: '20px',
            width: '140px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}
        >
          <span style={{ fontSize: '14px', color: '#6B7280', fontWeight: '500' }}>
            {card.titulo}
          </span>
          <h2 style={{ fontSize: '36px', margin: '10px 0 0 0', color: card.colorTexto, fontWeight: 'bold' }}>
            {card.valor}
          </h2>
        </div>
      ))}
    </div>
  );
};
