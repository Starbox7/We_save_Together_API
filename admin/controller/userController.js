/** 컨트롤러에서 DB 영역 분리 작업 예정 */
/** 보안 */
import 'dotenv/config';
import { genSalt, hash, compare } from 'bcrypt';
/** DB, 추후 싱글톤으로 리팩토링 */
import { connect, get } from 'mongoose';
import { Admin } from '../models/modelUser.js';
/** HTTP Respons Status Code */
import StatusCode from '../utils/StatusCode.js';
/** */
import CryptoJS from 'crypto-js';
/** */
import axios from 'axios';
/** */
// import authService from '../service/authService.js';

const { MONGO_URI, SALT, SERVICE_ID, ACCESS_KEY, SECRET_KEY, FROM_PHONE } = process.env;

const userController = {
  isAdmin: async (req, res, next) => {
    const to = req.params.phone;
    const authNum = makeAuthNum();

    try {
      await connect(MONGO_URI);

      const findAdmin = await Admin.findOne({ phone: to });
      if (!findAdmin) {
        return res.status(StatusCode.NOT_FOUND).json(StatusCode.NOT_FOUND);
      }

      const validated = await compare('404', findAdmin.password);
      if (!validated) {
        return res.status(StatusCode.CONFLICT.status).json(StatusCode.CONFLICT);
      }

      await Admin.findOneAndUpdate({ phone: to }, { authNum: authNum });

      next();
    } catch (err) {
      res.status(StatusCode.SERVER_ERROR.status).json(StatusCode.SERVER_ERROR);
    } finally {
    }
  },

  sendSMS: async (req, res) => {
    // const url = `https://sens.apigw.ntruss.com/sms/v2/services/${SERVICE_ID}/messages`;
    // const { signature, timestamp } = makeSignature('POST', `/sms/v2/services/${SERVICE_ID}/messages`);
    // const to = req.params.phone;

    try {
      const authNum = makeAuthNum();
      //   const payload = {
      //     type: 'SMS',
      //     contentType: 'COMM',
      //     countryCode: '82',
      //     from: FROM_PHONE,
      //     content: `[We save Together] 인증번호는 ${authNum} 입니다.`,
      //     messages: [
      //       {
      //         to,
      //       },
      //     ],
      //   };

      //   await axios.post(url, payload, {
      //     headers: {
      //       'Content-Type': 'application/json; charset=utf-8',
      //       'x-ncp-apigw-timestamp': timestamp,
      //       'x-ncp-iam-access-key': ACCESS_KEY,
      //       'x-ncp-apigw-signature-v2': signature,
      //     },
      //   });
      if (!req.session.authCode) {
        req.session.authCode = null;
      }
      if (!req.session.authTime) {
        req.session.authTime = null;
      }
      console.log(req.session);
      console.log(req.session.authCode);
      console.log(req.session.authTime);
      req.session.authCode = authNum;
      req.session.authTime = new Date();
      console.log(req.session.authCode);
      console.log(req.session.authTime);
      console.log(req.session);

      res.status(StatusCode.OK.status).json(StatusCode.OK);
    } catch (err) {
      console.log(err);
      res.status(StatusCode.SERVER_ERROR.status).json(StatusCode.SERVER_ERROR);
    }
  },
  confirm: async (req, res) => {
    try {
      console.log(req.session);
      console.log(req.session.authCode);
      console.log(req.session.authTime);

      const userAuth = req.params.auth;
      const authCode = req.session.authCode;
      const authTime = req.session.authTime;

      console.log(req.session);
      console.log(userAuth);
      console.log(authCode);
      console.log(authTime);

      console.log(req.session.authCode);
      console.log(req.session.authTime);

      if (userAuth === authCode && new Date() - authTime <= 180000) {
        // 인증번호가 일치하고 3분 이내에 생성된 경우
        req.session.authCode = null; // 인증번호 관련 데이터 삭제
        req.session.authTime = null; // 인증번호 생성 시간 관련 데이터 삭제
        return res.status(StatusCode.OK.status).json(StatusCode.OK);
      } else if (new Date() - authTime >= 180000) {
        req.session.authCode = null; // 인증번호 관련 데이터 삭제
        req.session.authTime = null; // 인증번호 생성 시간 관련 데이터 삭제
        return res.status(StatusCode.NOT_FOUND.status).json(StatusCode.NOT_FOUND);
      } else {
        return res.status(StatusCode.UNAUTHORIZED.status).json(StatusCode.UNAUTHORIZED);
      }
    } catch (err) {
      return res.status(StatusCode.BAD_REQUEST.status).json(StatusCode.BAD_REQUEST);
    }
  },
  checkAuthNum: async (req, res) => {
    const authNumber = req.params.number;
    const to = req.params.phone;

    try {
      await connect(MONGO_URI);

      const findAdmin = await Admin.findOne({ phone: to });
      const authNum = findAdmin.authNum;

      if (authNumber === authNum) {
        return res.status(StatusCode.OK.status).json(StatusCode.OK);
      }
      res.status(StatusCode.UNAUTHORIZED.status).json(StatusCode.UNAUTHORIZED);
    } catch (err) {
      res.status(StatusCode.SERVER_ERROR.status).json(StatusCode.SERVER_ERROR);
    }
  },
  signUp: async (req, res) => {
    try {
      // 몽고DB 연결
      await connect(MONGO_URI);
      // 비밀번호 해싱을 위한 솔트 생성
      const salt = await genSalt(parseInt(SALT));
      // 사용자가 제공한 비밀번호를 해싱
      const hashedPassword = await hash(req.body.password, salt);
      // 데이터 생성
      //   const newAdmin = new Admin({
      //     ...req.body,
      //     password: hashedPassword,
      //   });
      const newAdmin = {
        ...req.body,
        password: hashedPassword,
      };
      await Admin.findOneAndUpdate({ phone: req.body.phone }, { $set: newAdmin });
      // 성공 시, 201 상태 코드와 함께 관리자 데이터를 응답으로 반환
      res.status(StatusCode.CREATED.status).json(StatusCode.CREATED);
    } catch (err) {
      // 오류 발생 시, 500 상태 코드와 함께 에러 메시지 반환
      console.log(err);
      res.status(StatusCode.SERVER_ERROR.status).json(StatusCode.SERVER_ERROR);
    }
  },
};

export default userController;

function makeSignature(method, url) {
  const space = ' ';
  const newLine = '\n';
  const timestamp = new Date().getTime().toString();
  const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, SECRET_KEY);
  hmac.update(method);
  hmac.update(space);
  hmac.update(url);
  hmac.update(newLine);
  hmac.update(timestamp);
  hmac.update(newLine);
  hmac.update(ACCESS_KEY);

  const hash = hmac.finalize();
  return {
    signature: hash.toString(CryptoJS.enc.Base64),
    timestamp,
  };
}

function makeAuthNum() {
  return Math.floor(Math.random() * (999999 - 100000) + 100000);
}
