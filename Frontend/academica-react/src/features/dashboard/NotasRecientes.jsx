import React from 'react';

export const NotasRecientes = () => {
  // Datos idénticos al prototipo del sistema Académica
  const notas = [
    { id: 1, alumno: 'Pedro Ortiz', materia: 'Bases de Datos', final: 4.1, estado: 'A' },
    { id: 2, alumno: 'Isabel E.', materia: 'Prog. Web', final: 2.6, estado: 'R' },
    { id: 3, alumno: 'Marcos A.', materia: 'Telemática', final: 3.3, estado: 'A' }
  ];

  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      border: '1px solid #E5E7EB',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}>
      <h3 style={{ margin: '0 0 20px 0', color: '#1F2937', fontSize: '18px', fontWeight: '600' }}>
        Notas recientes
      </h3>
      
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #F3F4F6', color: '#4B5563', fontSize: '14px' }}>
            <th style={{ padding: '12px 8px' }}>Alumno</th>
            <th style={{ padding: '12px 8px' }}>Materia</th>
            <th style={{ padding: '12px 8px' }}>Final</th>
            <th style={{ padding: '12px 8px' }}>Estado</th>
          </tr>
        </thead>
        <tbody>
          {notas.map((nota) => (
            <tr key={nota.id} style={{ borderBottom: '1px solid #F3F4F6', fontSize: '14px', color: '#374151' }}>
              <td style={{ padding: '12px 8px' }}>{nota.alumno}</td>
              <td style={{ padding: '12px 8px' }}>{nota.materia}</td>
              <td style={{ padding: '12px 8px', fontWeight: '500' }}>{nota.final.toFixed(1)}</td>
              <td style={{ padding: '12px 8px' }}>
                <span style={{
                  backgroundColor: nota.estado === 'A' ? '#D1FAE5' : '#FEE2E2',
                  color: nota.estado === 'A' ? '#065F46' : '#991B1B',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  fontSize: '12px'
                }}>
                  {nota.estado}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
