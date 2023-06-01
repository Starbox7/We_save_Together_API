import pointService from '../service/pointService.js';
import StatusCode from '../util/StatusCode.js';

const pointController = {
  givePoint: async (req, res) => {
    const { id, email, point } = req.body;
    try {
      await pointService.givePoint({ id, email, point });
      return res.status(StatusCode.OK.status).json(StatusCode.OK);
    } catch (err) {
      return res.status(StatusCode.SERVER_ERROR.status).json(StatusCode.SERVER_ERROR);
    }
  },
  giveTime: async (req, res) => {
    const { id, email, time } = req.body;
    try {
      await pointService.givePoint({ id, email, time });
      return res.status(StatusCode.OK.status).json(StatusCode.OK);
    } catch (err) {
      return res.status(StatusCode.SERVER_ERROR.status).json(StatusCode.SERVER_ERROR);
    }
  },
};

export default pointController;
