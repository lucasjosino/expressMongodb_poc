require('dotenv/config');
import express from 'express';
import login from './src/login/routes';
import users from './src/users/routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

//SERVIDOR
const app = express();
const PORT = 8000;

//bodyParser
app.use(express.json());

//BANCO DE DADOS 
mongoose.connect(String(process.env.DB_HOST),{ useNewUrlParser: true }, (err) => {
  if (err) console.log(err);
  console.log(`⚡️ [Database]: Server is connected on mongo`)
})
const db = mongoose.connection;

//ROTAS
app.use(login);
app.use(users);

//LISTEN
app.listen(PORT, () => {
  console.log(`⚡️ [server]: Server is running at https://localhost:${PORT}`);
});

export default db;