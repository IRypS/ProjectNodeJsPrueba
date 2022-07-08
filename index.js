import 'dotenv/config';
import express from 'express';

import './database/conexionMongo.js'
import rutasApp from './routes/index.routes.js';

const app = express();

//RUTAS
app.use('/api/v1', rutasApp);


const PORT = process.env.PORT || 1642;

app.listen(
  PORT,
  () => {
    console.log(`📗 La app está funcionando en el puerto: http://localhost:${PORT}`);
  }
);
