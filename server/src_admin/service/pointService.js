import Point from '../model/Point.js';

const pointService = {
  givePoint: async ({ id, email, point }) => {
    await Point.givePoint({ id, email, point });
  },
  giveTime: async ({ id, email, time }) => {
    await Point.givePoint({ id, email, time });
  },
};

export default pointService;
