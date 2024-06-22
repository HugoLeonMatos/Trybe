import { Router } from 'express';

import UserController from '../controllers/UserController';
import Validations from '../middlewares/Validations';

const userController = new UserController();

const router = Router();

router.post(
  '/',
  Validations.validateEmail,
  Validations.ValidateSenha,
  (req, res) => userController.login(req, res),
);

export default router;
