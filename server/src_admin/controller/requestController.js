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
    console.log(`${req.body.id}`);
    console.log(`${req.body.campagin}`);
    const campagin = req.body.campagin;
    const id = req.body.id;
    // console.log(`${campagin}${id}`);
    try {
      await requestService.put(campagin, id);
      return res.status(StatusCode.OK.status).json(StatusCode.OK);
    } catch (err) {
      return res.status(StatusCode.SERVER_ERROR.status).json(StatusCode.SERVER_ERROR);
    }
  },
};

export default requestController;
