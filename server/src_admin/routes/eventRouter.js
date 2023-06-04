import { Router } from 'express';
import eventController from '../controller/eventConroller.js';

const eventRouter = Router();

eventRouter //
  .route('/event/data')
  .get(eventController.get);
eventRouter //
  .route('/event/update')
  .put(eventController.put);

export default eventRouter;
