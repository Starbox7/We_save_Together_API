import eventService from '../service/eventService.js';
import StatusCode from '../util/StatusCode.js';

const eventController = {
  get: async (req, res) => {
    try {
      const events = await eventService.getEvents();
      return res.status(StatusCode.OK.status).json(events);
    } catch (err) {
      return res.status(StatusCode.SERVER_ERROR.status).json(StatusCode.SERVER_ERROR);
    }
  },
  put: async (req, res) => {
    console.log(req.body);
    try {
      const { id, campagin } = req.body;
      await eventService.updateEventStatus(id, campagin);
      return res.status(StatusCode.OK.status).json(StatusCode.OK);
    } catch (err) {
      return res.status(StatusCode.SERVER_ERROR.status).json(StatusCode.SERVER_ERROR);
    }
  },
};

export default eventController;
