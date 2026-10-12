// =========================================================================
// EVIDENCIA: GA7-220501096-AA5-EV01 - DISEÑO Y DESARROLLO DE SERVICIOS WEB
// PROYECTO GUÍA: ACADÉMICA (Backend conectado a MySQL)
// =========================================================================

// 1. IMPORTACIONES
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 5000; 

// 2. MIDDLEWARES
app.use(cors());          
app.use(express.json());  

// 3. CONEXIÓN A LA BASE DE DATOS 'ACADEMICA'
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',       
    password: 'adso123',       
    database: 'academica'
});

db.connect((error) => {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
    } else {
        console.log('¡Conectado exitosamente a la base de datos MySQL (academica)!');
    }
});

// 4. SERVICIO WEB: REGISTRO DE USUARIOS EN BASES DE DATOS
app.post('/api/registro', (req, res) => {
    const { nombre, correo, contrasena, rol } = req.body;
    const sqlInsert = 'INSERT INTO usuarios (nombre, correo, password_hash, rol) VALUES (?, ?, ?, ?)';
    
    db.query(sqlInsert, [nombre, correo, contrasena, rol || 'ESTUDIANTE'], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(400).json({ success: false, mensaje: 'El correo electrónico ya está registrado.' });
            }
            return res.status(500).json({ success: false, mensaje: 'Error interno al registrar el usuario.' });
        }
        return res.status(201).json({ success: true, mensaje: 'Usuario creado con éxito en el sistema.' });
    });
});

// 5. SERVICIO WEB: INICIO DE SESIÓN (LOGIN)
app.post('/api/login', (req, res) => {
    const { usuario, correo, contrasena } = req.body;
    const correoIdentificador = correo || usuario; // Resuelve el conflicto de nombres del front

    const sqlSelect = 'SELECT * FROM usuarios WHERE correo = ? AND password_hash = ?';

    db.query(sqlSelect, [correoIdentificador, contrasena], (err, resultados) => {
        if (err) {
            return res.status(500).json({ success: false, mensaje: 'Error interno del servidor.' });
        }

        if (resultados.length > 0) {
            const usuarioLogueado = resultados[0]; 
            return res.status(200).json({ 
                success: true, 
                mensaje: `¡Bienvenido al sistema Académica, ${usuarioLogueado.nombre}!`,
                rol: usuarioLogueado.rol 
            });
        } else {
            return res.status(401).json({ 
                success: false, 
                mensaje: 'Credenciales inválidas. El correo electrónico o la contraseña son incorrectos.' 
            });
        }
    });
});

// 6. APERTURA DEL PUERTO
app.listen(PORT, () => {
    console.log(`Servidor de Académica corriendo en http://localhost:${PORT}`);
});