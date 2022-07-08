//Importar una ruta con ES5

/* const express = require('express');
const router = express.Router();

router.get('/', ()=>{})

modules.exports = router; */

import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.json({ status: "success", nombre: "Juan" });
});

router.get('/ruta2', (req, res) => {
  res.json({ status: "accediendo a la ruta 2" });
});

export default router;

