import { connect } from 'mongoose';
import { MONGO_URI } from '../constant/constant.js';
import { CampaginSchema } from '../schema/schema.js';

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
              캠페인_이름: campagin.campagin_name,
              유저: users.map((user) => user.register_userId),
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
  put: async () => {
    try {
      await connect(MONGO_URI);
      return await CampaginSchema.updateOne(
        {
          campagin_name: campagin_name,
          register_user: {
            $elemMatch: { register_userId: register_userId },
          },
        },
        { $set: { 'register_user.$.register_status': true } }
      );
    } catch (err) {
      throw new Error(`DB Error : ${err}`);
    }
  },
};

export default Request;
