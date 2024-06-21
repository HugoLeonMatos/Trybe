import { Router } from 'express';
import teamsRouter from './TeamsRouter';
import userRouter from './UserRouter';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/login', userRouter);

export default router;
