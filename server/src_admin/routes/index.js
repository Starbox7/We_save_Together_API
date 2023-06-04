/** import Library */
import { Router } from 'express';
/** import Router */
import authRouter from './authRouter.js';
import noticeRouter from './noticeRouter.js';
import pointRouter from './pointRouter.js';
import requestRouter from './requestRouter.js';
import eventRouter from './eventRouter.js';

/** Create router */
const adminRouter = Router();

/** connect Router */
adminRouter.use(authRouter);
adminRouter.use(noticeRouter);
adminRouter.use(pointRouter);
adminRouter.use(requestRouter);
adminRouter.use(eventRouter);

export default adminRouter;
