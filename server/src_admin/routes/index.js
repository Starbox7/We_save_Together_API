/** import Library */
import { Router } from 'express';
/** import Router */
import authRouter from './authRouter.js';
import noticeRouter from './noticeRouter.js';

/** Create router */
const adminRouter = Router();

/** connect Router */
adminRouter.use(authRouter);
adminRouter.use(noticeRouter);

export default adminRouter;
