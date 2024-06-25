import { Router } from 'express';
import teamsRouter from './TeamsRouter';
import userRouter from './UserRouter';
import matchesRouter from './MatchesRouter';
import leaderboardRouter from './LeaderboardRouter';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/login', userRouter);
router.use('/matches', matchesRouter);
router.use('/leaderboard', leaderboardRouter);

export default router;
