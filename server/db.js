import mysql from 'mysql2/promise';
import 'dotenv/config.js';

const connection = await mysql.createConnection({
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
});

console.log("Conectado ao MySQL (Railway)");

export default connection;