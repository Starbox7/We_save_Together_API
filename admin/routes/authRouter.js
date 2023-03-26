/** 보안 */
import 'dotenv/config';

/** 라이브러리 */
import { Router } from 'express';

/** 제어부 */
import userController from '../controller/userController.js';

const authRouter = Router();

// authRouter.post(
//   '/init', //
//   userController.initAdmin
// );

authRouter.get(
  '/sms/:phone', //
  userController.isAdmin,
  userController.sendSMS
);

authRouter.get(
  '/certificate/:phone/:number', //
  userController.checkAuthNum
);

authRouter.put(
  '/register', //
  userController.signUp
);

export default authRouter;
