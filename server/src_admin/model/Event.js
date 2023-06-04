// 모델 (event.js)
import { connect } from 'mongoose';
import { MONGO_URI } from '../constant/constant.js';
import { CampaginSchema, UserSchema } from '../schema/schema.js';

const Event = {
  get: async () => {
    try {
      await connect(MONGO_URI);
      const data = await CampaginSchema.find();

      const events = data.flatMap((campaign) => {
        return campaign.complete_user
          .filter((user) => user.complete_status === false && user.complete_imgae)
          .map((user) => ({
            userId: user.complete_userId,
            campaignName: campaign.campagin_name,
            imageUrl: user.complete_imgae,
          }));
      });
      return events;
    } catch (err) {
      throw new Error(`DB Error: ${err}`);
    }
  },
  updateStatus: async (userId, campaignName) => {
    try {
      await connect(MONGO_URI);
      console.log(userId);
      await CampaginSchema.updateOne(
        {
          campagin_name: campaignName,
          'complete_user.complete_userId': userId,
        },
        { $set: { 'complete_user.$.complete_status': true } }
      );
      await UserSchema.updateOne(
        {
          user_id: userId,
          'complete_campagin.complete_campaginName': campaignName,
          'complete_campagin.complete_status': false,
        },
        { $set: { 'complete_campagin.$.complete_status': true } }
      );
    } catch (err) {
      throw new Error(`DB Error: ${err}`);
    }
  },
};

export default Event;
