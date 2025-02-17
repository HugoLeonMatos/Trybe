import { Router } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';

const leaderboardController = new LeaderboardController();

const router = Router();

router.get('/home', (req, res) => leaderboardController.tabelaComJogosCasaok(req, res));

export default router;
