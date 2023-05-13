/** import Library */
import { Router } from 'express';
/** import Controller */
import authController from '../controller/authController.js';

/** Create router */
const authRouter = Router();

/** Routing */
authRouter //
  .route('/auth/signup')
  .post(authController.signup);
authRouter //
  .route('/auth/signin')
  .get(authController.auto)
  .post(authController.signin);
authRouter //
  .route('/auth/:phone')
  .get(authController.authRequest);
authRouter //
  .route('/auth/:id/:phone')
  .get(authController.authConfirm);
authRouter //
  .route('/findid')
  .post(authController.findId);
authRouter //
  .route('/findpw')
  .post(authController.findPwAuth);
authRouter //
  .route('/updatepw')
  .post(authController.updatePw);
authRouter //
  .route('/deleteadmin/:id')
  .get(authController.deleteAdmin);

export default authRouter;
