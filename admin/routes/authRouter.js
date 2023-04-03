/** 보안 */
import 'dotenv/config';

/** 라이브러리 */
import { Router } from 'express';

/** 제어부 */
import userController from '../controller/userController.js';

const authRouter = Router();

authRouter.get(
  '/sms/:phone', //
  userController.sendSMS
);

authRouter.get(
  '/certificate/:auth', //
  userController.confirm
);

authRouter.post(
  '/register', //
  userController.signUp
);

// authRouter
//   .route('/confirm')
//   .post(userController.confirm);

export default authRouter;
