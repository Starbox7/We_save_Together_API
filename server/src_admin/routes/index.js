/** import Library */
import { Router } from 'express';
/** import Router */
import authRouter from './authRouter.js';

/** Create router */
const adminRouter = Router();

/** connect Router */
adminRouter.use(authRouter);

export default adminRouter;
