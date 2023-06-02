import requestService from '../service/requestService.js';
import StatusCode from '../util/StatusCode.js';

const requestController = {
  get: async (req, res) => {
    try {
      const data = await requestService.get();
      return res.status(StatusCode.OK.status).json(data);
    } catch (err) {
      return res.status(StatusCode.SERVER_ERROR.status).json(StatusCode.SERVER_ERROR);
    }
  },
  put: async (req, res) => {
    try {
      await requestService.put();
      return res.status(StatusCode.OK.status).json(StatusCode.OK);
    } catch (err) {
      return res.status(StatusCode.SERVER_ERROR.status).json(StatusCode.SERVER_ERROR);
    }
  },
};

export default requestController;
