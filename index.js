import 'dotenv/config';
import express from 'express';

import './database/conexionMongo.js'

const app = express();

const PORT = process.env.PORT || 1642;

app.listen(
  PORT,
  () => {
    console.log(`📗 La app está funcionando en el puerto: http://localhost:${PORT}`);
  }
);
