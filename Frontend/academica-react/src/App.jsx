import React, { useState } from 'react';
import './style.css'; // Asegúrate de tener tus estilos enlazados

function App() {
  // 1. ESTADOS: Variables de React para capturar lo que el usuario escribe en vivo
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  // 2. LÓGICA: Función de control que envía los datos a la API de Node.js
  const manejarLogin = async (e) => {
    e.preventDefault(); 

    // Verificación visual en la consola del navegador antes de enviar por red
    console.log("Enviando al backend:", { correo, contrasena });

    try {
      const respuesta = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ correo, contrasena })
      });

      const resultado = await respuesta.json();

      if (respuesta.ok && resultado.success) {
        // Alerta de éxito con el nombre real devuelto por la base de datos MySQL
        alert(resultado.mensaje);
      } else {
        // Alerta de error controlado (Credenciales incorrectas)
        alert("Error: " + resultado.mensaje);
      }

    } catch (error) {
      alert('Error de conexión: No se pudo establecer comunicación con el servidor Académica.');
    }
  };

  // 3. DISEÑO VISUAL: Construcción de la interfaz de usuario en la pantalla
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
        
        {/* Encabezado principal del módulo */}
        <h1 style={{ textAlign: 'center', color: '#1a252f', marginBottom: '5px', fontFamily: 'sans-serif' }}>ACADÉMICA</h1>
        <p style={{ textAlign: 'center', color: '#7f8c8d', fontSize: '14px', marginBottom: '30px' }}>Módulo: Inicio de Sesión</p>

        {/* Formulario contenedor */}
        <form onSubmit={manejarLogin}>
          
          {/* Campo: Correo Electrónico */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#2c3e50' }}>
              Correo Electrónico:
            </label>
            <input 
              type="email" 
              placeholder="ejemplo@academica.edu.co"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #bdc3c7', boxSizing: 'border-box' }}
            />
          </div>

          {/* Campo: Contraseña */}
          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#2c3e50' }}>
              Contraseña:
            </label>
            <input 
              type="password" 
              placeholder="Digite su contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #bdc3c7', boxSizing: 'border-box' }}
            />
          </div>

          {/* Botón de acción */}
          <button 
            type="submit" 
            style={{ width: '100%', padding: '12px', backgroundColor: '#001f3f', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}
          >
            Ingresar al Sistema
          </button>

        </form>
      </div>
    </div>
  );
}

export default App;
