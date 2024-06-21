import { Router } from 'express';

import UserController from '../controllers/UserController';

const userController = new UserController();

const router = Router();

router.post('/', (req, res) => userController.login(req, res));

export default router;
