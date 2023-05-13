import { NotionSchema } from '../schema/schema.js';
import { MONGO_URI } from '../constant/constant.js';
import { connect, disconnect } from 'mongoose';

const Notion = {
  upload: async ({ id, title, content, imageUrl }) => {
    // /** Test!!! */ console.log(`${id}, ${title}, ${content}, ${imageUrl}`);
    const newNotion = new NotionSchema({
      id: id,
      title: title,
      content: content,
      imageUrl: imageUrl,
    });
    /** Test!!! */ console.log(`${newNotion}`);
    try {
      /** Test!!! */ console.log(`${5555}`);
      await connect(MONGO_URI);
      /** Test!!! */ console.log(`111`);
      const notion = await newNotion.save();
      /** Test!!! */ console.log(`${notion}`);
    } catch (err) {
      throw new Error('DB error : signup');
    }
  },
};

export default Notion;
