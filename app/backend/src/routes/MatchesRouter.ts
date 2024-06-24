import { Router } from 'express';
import MatchesController from '../controllers/MatchesController';
import validToken from '../middlewares/ValidToken';

const matchesController = new MatchesController();

const router = Router();

router.get('/', (req, res) => matchesController.getAllMatches(req, res));

router.patch(
  '/:id',
  validToken,
  (req, res) => matchesController.updatedGoals(req, res),
);

router.patch(
  '/:id/finish',
  validToken,
  (req, res) => matchesController.finalizedMatch(req, res),
);

export default router;
