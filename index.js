import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser'; 
import cors from 'cors';

import './database/conexionMongo.js'
import rutasApp from './routes/index.routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//RUTAS
app.use('/api/v1', rutasApp);


const PORT = process.env.PORT || 1642;

app.listen(
  PORT,
  () => {
    console.log(`📗 La app está funcionando en el puerto: http://localhost:${PORT}`);
  }
);
