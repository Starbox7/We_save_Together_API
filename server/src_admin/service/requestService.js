import Request from '../model/Request.js';

const requestService = {
  get: async () => {
    const data = await Request.get();
    return data;
  },
  put: async () => {
    await Request.updateStatus(campagin_name, register_userId);
  },
};

export default requestService;
