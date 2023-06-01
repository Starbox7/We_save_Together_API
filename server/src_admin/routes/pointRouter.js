import { Router } from 'express';
import pointController from '../controller/pointController.js';

const pointRouter = Router();
console.log('test');

pointRouter //
  .route('/give/point')
  .post(pointController.givePoint);
pointRouter //
  .route('/give/time')
  .post(pointController.giveTime);

export default pointRouter;

//유저 아이디, 이메일, 지급량
