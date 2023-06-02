import { connect } from 'mongoose';
import { MONGO_URI } from '../constant/constant.js';
import { CampaginSchema, UserSchema } from '../schema/schema.js';

const Request = {
  get: async () => {
    try {
      await connect(MONGO_URI);
      const data = await CampaginSchema.find();

      let response = data.flatMap((campagin) => {
        let users = campagin.register_user.filter((user) => user.register_status == false);
        if (users.length > 0) {
          return [
            {
              campagin: campagin.campagin_name,
              id: users.map((user) => user.register_userId),
            },
          ];
        } else {
          return [];
        }
      });

      return response;
    } catch (err) {
      throw new Error(`DB Error : ${err}`);
    }
  },
  put: async (campagin, id) => {
    try {
      await connect(MONGO_URI);
      await CampaginSchema.updateOne(
        {
          campagin_name: campagin,
          register_user: {
            $elemMatch: { register_userId: id },
          },
        },
        { $set: { 'register_user.$.register_status': true } }
      );
      await UserSchema.updateOne(
        {
          user_id: id,
          register_campagin: {
            $elemMatch: { register_campaginName: campagin },
          },
        },
        { $set: { 'register_campagin.$.register_status': true } }
      );
    } catch (err) {
      throw new Error(`DB Error : ${err}`);
    }
  },
};

export default Request;
