import { Router } from 'express';
import Auth from '../middleware/Auth';
import noticeController from '../controller/noticeController';

const noticeRouter = Router();

noticeRouter.use(Auth);

noticeRouter //
  .route('/notice/write')
  .post(noticeController.postNotice);

export default noticeRouter;
