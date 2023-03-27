//   initAdmin: async (req, res) => {
//     try {
//       // 몽고DB 연결
//       await connect(MONGO_URI);
//       // 비밀번호 해싱을 위한 솔트 생성
//       const salt = await genSalt(parseInt(SALT));
//       // 사용자가 제공한 비밀번호를 해싱
//       const hashedPassword = await hash('404', salt);
//       // 데이터 생성
//       const newAdmin = new Admin({
//         email: req.body.email,
//         password: hashedPassword,
//         phone: req.body.phone,
//       });
//       // 데이터 삽입
//       await newAdmin.save();
//       // 성공 시, 201 상태 코드와 함께 관리자 데이터를 응답으로 반환
//       res.status(SC.CREATED.status).json(SC.CREATED);
//     } catch (err) {
//       // 오류 발생 시, 500 상태 코드와 함께 에러 메시지 반환
//       //   res.status(SC.SERVER_ERROR.status).json(SC.SERVER_ERROR);
//       console.log(err);
//       res.status(SC.SERVER_ERROR.status).json(err);
//     }
//   },

// authRouter.post(
//   '/init', //
//   userController.initAdmin
// );
