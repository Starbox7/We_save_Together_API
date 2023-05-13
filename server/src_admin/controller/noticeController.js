import notionService from '../service/notionService.js';
import StatusCode from '../util/StatusCode.js';
import path from 'path';

const noticeController = {
  postNotice: async (req, res) => {
    //이미지는 서버 저장 처리를 하고, 이름은 클라이언트에서 고유하게 만들어서 받는다.
    //이후 데이터베이스에는 .... 공부
    const { id, title, content } = req.body;
    const imageUrl = path.parse(req.files[0].filename).name;
    try {
      await notionService.upload({ id, title, content, imageUrl });

      return res.status(StatusCode.CREATED.status).json(StatusCode.CREATED);
    } catch (err) {
      return res.status(StatusCode.SERVER_ERROR.status).json(StatusCode.SERVER_ERROR);
    }
  },
  getNotice: async (req, res) => {},
  putNotice: async (req, res) => {},
  deleteNotice: async (req, res) => [],
};

export default noticeController;
//              /** Test!!! */ console.log(`${}`);

// app.get('/image/:imageName', (req, res) => {
//   for (let i = 0; i < 10; i++) {
//     const imagePath = `./assets/images/${req.params.imageName}_${i}${path.extname(req.params.imageName)}`;
//     if (fs.existsSync(imagePath)) {
//       const img = fs.readFileSync(imagePath);
//       res.writeHead(200, { 'Content-Type': 'image/png' });
//       res.end(img, 'binary');
//     } else {
//       break;
//     }
//   }
// });
//              /** Test!!! */ console.log(`${}`);
