// // 필요한 모듈들을 임포트
// import { Router } from 'express';
// import { genSalt, hash } from 'bcrypt';
// import { connect, model, compare } from 'mongoose';
// import 'dotenv/config';
// import { Admin } from '../models/modelUser.js';

// // 사용자 스키마 임포트
// import { AdminSchema } from '../models/modelUser.js';

// // DBtestRouter를 express.Router() 인스턴스로 생성
// const DBtestRouter = Router();

// // 환경 변수에서 몽고DB 연결 URI와 SALT 가져오기
// const MONGO_URI = process.env.MONGO_URI;
// const SALT = parseInt(process.env.SALT);

// // Admin 모델을 "admins" 컬렉션과 AdminSchema를 사용하여 생성
// const Admin = model('admins', AdminSchema);

// /**
//  * /register 경로에 대한 POST 요청 처리
//  * 관리자 회원가입을 위한 라우터
//  */
// DBtestRouter.post('/register', async (req, res) => {
//   try {
//     // 몽고DB 연결
//     await connect(MONGO_URI);

//     // 비밀번호 해싱을 위한 솔트 생성
//     const salt = await genSalt(SALT);
//     // 사용자가 제공한 비밀번호를 해싱
//     const hashedPassword = await hash(req.body.password, salt);

//     // 데이터 생성
//     const newAdmin = new Admin({
//       email: req.body.email,
//       password: hashedPassword,
//       name: req.body.name,
//       hakbun: req.body.hakbun,
//       phone: req.body.phone,
//     });

//     // 데이터 삽입
//     const admin = await newAdmin.save();
//     // 성공 시, 201 상태 코드와 함께 관리자 데이터를 응답으로 반환
//     res.status(201).json(admin);
//   } catch (err) {
//     // 오류 발생 시, 500 상태 코드와 함께 에러 메시지 반환
//     console.log(err);
//     res.status(500).json(`${err}`);
//   }
// });

// DBtestRouter.put('/signup', async (req, res) => {
//   try {
//     await connect(MONGO_URI);

//     const findAdmin = await Admin.findOne(req.body.phone);
//     if (!findAdmin) {
//       return res.status(404).json('Admin Not Found');
//     }

//     const validated = await compare('404', findAdmin.password);
//     if (!validated) {
//       return res.status(409).json('Admin Conflict');
//     }
//   } catch (err) {
//   } finally {
//   }
// });

// // DBtestRouter를 다른 모듈에서 사용할 수 있도록 내보내기
// export { DBtestRouter };
