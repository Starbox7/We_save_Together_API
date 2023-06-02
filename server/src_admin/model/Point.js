import { connect } from 'mongoose';
import { UserSchema } from '../schema/schema.js';
import { MONGO_URI } from '../constant/constant.js';

const Point = {
  givePoint: async ({ id, email, point }) => {
    try {
      await connect(MONGO_URI);
      await UserSchema.findOneAndUpdate({ user_id: id, email: email }, { havingPoint: point });
    } catch (err) {
      throw new Error(`DB Error : ${err}`);
    }
  },
  giveTime: async ({ id, email, time }) => {
    try {
      await connect(MONGO_URI);
      await UserSchema.findOneAndUpdate({ user_id: id, email: email }, { havingVolunteerTime: time });
    } catch (err) {
      throw new Error(`DB Error : ${err}`);
    }
  },
};

export default Point;
