import { Router } from 'express';
import requestController from '../controller/requestController.js';

const requestRouter = Router();

requestRouter //
  .route('/register/allow')
  .put(requestController.put);

requestRouter //
  .route('/register')
  .get(requestController.get);

export default requestRouter;
