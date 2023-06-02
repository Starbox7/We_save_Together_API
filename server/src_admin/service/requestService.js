import Request from '../model/Request.js';

const requestService = {
  get: async () => {
    const data = await Request.get();
    return data;
  },
  put: async (campagin, id) => {
    await Request.put(campagin, id);
  },
};

export default requestService;
