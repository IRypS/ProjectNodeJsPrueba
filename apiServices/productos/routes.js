import { Router } from 'express';

const router = Router();

router.get('/listar', (req, res) => {
  res.send("Ingresando al producto Listar");
});

export default router;