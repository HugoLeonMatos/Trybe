import { Router } from 'express';

import UserController from '../controllers/UserController';
import Validations from '../middlewares/Validations';
import validToken from '../middlewares/ValidToken';

const userController = new UserController();

const router = Router();

router.post(
  '/',
  Validations.validateEmail,
  Validations.ValidateSenha,
  (req, res) => userController.login(req, res),
);

router.get(
  '/role',
  validToken,
  (req, res) => userController.findRole(req, res),
);

export default router;
