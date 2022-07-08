//Importar una ruta con ES5

/* const express = require('express');
const router = express.Router();

router.get('/', ()=>{})

modules.exports = router; */

import { Router } from 'express';
const router = Router();

import productsRoutes from '../apiServices/productos/routes.js';

router.use('/products', productsRoutes);

export default router;

