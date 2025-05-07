import express from 'express';
import connection from './db.js';

const app = express();
app.use(express.json());

app.get('/usuarios', async (req, res) => {
  const [rows] = await connection.query('SELECT * FROM usuarios');
  res.json(rows);
});

app.listen(3001, () => console.log('Servidor rodando na porta 3001'));