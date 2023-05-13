import Notion from '../model/Notion.js';

const notionService = {
  upload: async ({ id, title, content, imageUrl }) => {
    if (!id) {
      throw new Error('ID IS INVALID');
    }
    if (!title) {
      throw new Error('Title IS INVALID');
    }
    if (!content) {
      throw new Error('Content IS INVALID');
    }
    if (!imageUrl) {
      throw new Error('imageUrl IS INVALID');
    }
    const notion = {
      id: id,
      title: title,
      content: content,
      imageUrl: imageUrl,
    };
    /** Test!!! */ console.log(`${3333}`);
    await Notion.upload(notion);
    /** Test!!! */ console.log(`${4444}`);
  },
};

export default notionService;
