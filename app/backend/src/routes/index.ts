import { Router } from 'express';
import teamsRouter from './TeamsRouter';
import userRouter from './UserRouter';
import matchesRouter from './MatchesRouter';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/login', userRouter);
router.use('/matches', matchesRouter);

export default router;
