import { Router } from 'express';
import { listar, guardar, buscarProducto, actualizar, eliminar } from './controller.js';

const router = Router();

router.get('/listar', listar);

router.get('/buscar/:id', buscarProducto);

router.post('/guardar', guardar);

router.patch('/actualizar/:id', actualizar);

router.delete('/eliminar/:id', eliminar);

export default router;