// dbConfig.js
const sql = require('mssql');

// Configuración de la conexión
const config = {
    user: 'usuario1',
    password: 'unfv123',
    server: 'localhost', // Puede ser una IP o nombre de dominio
    database: 'cursosunfv',
    options: {
        encrypt: true, // Para conexiones seguras, ajustar según sea necesario
        trustServerCertificate: true  // Cambiar a true si estás usando un certificado autofirmado
    }
};

// Crear una conexión de SQL Server
const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Conectado a SQL Server');
        return pool;
    })
    .catch(err => {
        console.error('Error al conectar a SQL Server:', err);
        process.exit(1);
    });

module.exports = {
    sql,
    poolPromise
};
