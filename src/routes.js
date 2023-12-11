import { Router } from 'express';
import { userController, roleController } from '../src/api/controllers/index';

const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome byaatchesssss");
});

router.use('/users', userController);

router.use('/roles', roleController);
export default router;

