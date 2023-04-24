import { Router } from 'express';
/** 유저 라우팅 처리시 기존 방식대로 최상단 주소에 "/api"를 붙여 처리하면 대부분의 경우의 중첩은 없을 것으로 예상 */
/** 가능한 기존의 코드를 살려서 구성했습니다만 몇몇 사항은 admin의 config로 이전했습니다.*/
/** usecreateindex, usefindandmodify는 최신 버전의 데이터베이스에서는 지원되지 않아 소멸되었습니다. */
import mongoose, { connect } from 'mongoose';
import { MONGO_URI } from '../src_admin/constant/constant.js';
import auth from './middleware/auth.js';
import User from './models/User.js';

const userRouter = Router();

/** 아래의 코드를 비활성화 하고 await connect(MONGO_URI);를 async하게 사용하게 수정하였음 */
// mongoose
//   .connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('MongoDB Connected...'))
//   .catch((err) => console.log(err));

userRouter.post('/api/users/register', async (req, res) => {
  await connect(MONGO_URI);
  //회원 가입 할떄 필요한 정보들을  client에서 가져오면
  //그것들을  데이터 베이스에 넣어준다.
  const user = new User(req.body);

  try {
    const userInfo = await user.save();
    res.status(200).json({
      success: true,
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    res.json({ success: false, err });
  }
});

userRouter.post('/api/users/login', async (req, res) => {
  await connect(MONGO_URI);
  // console.log('ping')
  //요청된 이메일을 데이터베이스에서 있는지 찾는다.
  User.findOne({ email: req.body.email }, (err, user) => {
    // console.log('user', user)
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: '제공된 이메일에 해당하는 유저가 없습니다.',
      });
    }

    //요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인.
    user.comparePassword(req.body.password, (err, isMatch) => {
      // console.log('err',err)

      // console.log('isMatch',isMatch)

      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: '비밀번호가 틀렸습니다.',
        });

      //비밀번호 까지 맞다면 토큰을 생성하기.
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        // 토큰을 저장한다.  어디에 ?  쿠키 , 로컳스토리지
        res.cookie('x_auth', user.token).status(200).json({
          loginSuccess: true,
          userId: user._id,
          name: user.name,
          email: user.email,
        });
      });
    });
  });
});

// role 1 어드민    role 2 특정 부서 어드민
// role 0 -> 일반유저   role 0이 아니면  관리자
userRouter.get('/api/users/auth', auth, async (req, res) => {
  await connect(MONGO_URI);
  //여기 까지 미들웨어를 통과해 왔다는 얘기는  Authentication 이 True 라는 말.
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});

userRouter.get('/api/users/logout', auth, async (req, res) => {
  await connect(MONGO_URI);
  // console.log('req.user', req.user)
  User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
    });
  });
});

export default userRouter;
