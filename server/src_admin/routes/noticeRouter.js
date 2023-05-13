import { Router } from 'express';
import { checkAccess, checkRefresh } from '../middleware/Auth.js';
import noticeController from '../controller/noticeController.js';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const noticeRouter = Router();

/** use를 사용한 JWT처리 방식에서 오류 처리에 대한 결함이 발견되어 수정함. */
// noticeRouter.use(Auth);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src_admin/assets/images/');
  },
  filename: function (req, file, cb) {
    const uniqueName = uuidv4();
    cb(null, uniqueName + '_' + '0' + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

noticeRouter //
  .route('/notice/write')
  .all(checkAccess, checkRefresh)
  .post(upload.array('images', 10), noticeController.postNotice);

export default noticeRouter;
