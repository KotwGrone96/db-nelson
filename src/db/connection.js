require('dotenv').config();

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASS_DB,
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conexión exitosa a la Base de Datos');
});

module.exports = connection;
