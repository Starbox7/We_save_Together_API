/** 보안 */
import 'dotenv/config';

/** DB, 추후 싱글톤으로 리팩토링 */
import { connect } from 'mongoose';
import { Admin } from '../models/modelUser.js';

/** HTTP Respons Status Code */
import SC from '../utils/StatusCode.js';

import { genSalt, hash, compare } from 'bcrypt';

import CryptoJS from 'crypto-js';

import axios from 'axios';

const { MONGO_URI, SALT, SERVICE_ID, ACCESS_KEY, SECRET_KEY, FROM_PHONE } = process.env;

const userController = {
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
  isAdmin: async (req, res, next) => {
    const to = req.params.phone;
    const authNum = makeAuthNum();

    try {
      await connect(MONGO_URI);

      const findAdmin = await Admin.findOne({ phone: to });
      if (!findAdmin) {
        return res.status(SC.NOT_FOUND).json(SC.NOT_FOUND);
      }

      const validated = await compare('404', findAdmin.password);
      if (!validated) {
        return res.status(SC.CONFLICT.status).json(SC.CONFLICT);
      }

      await Admin.findOneAndUpdate({ phone: to }, { authNum: authNum });

      next();
    } catch (err) {
      res.status(SC.SERVER_ERROR.status).json(SC.SERVER_ERROR);
    } finally {
    }
  },

  sendSMS: async (req, res) => {
    const url = `https://sens.apigw.ntruss.com/sms/v2/services/${SERVICE_ID}/messages`;
    const { signature, timestamp } = makeSignature('POST', `/sms/v2/services/${SERVICE_ID}/messages`);
    const to = req.params.phone;

    try {
      await connect(MONGO_URI);

      const findAdmin = await Admin.findOne({ phone: to });
      const authNum = findAdmin.authNum;

      const payload = {
        type: 'SMS',
        contentType: 'COMM',
        countryCode: '82',
        from: FROM_PHONE,
        content: `[We save Together] 인증번호는 ${authNum} 입니다.`,
        messages: [
          {
            to,
          },
        ],
      };

      const response = await axios.post(url, payload, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'x-ncp-apigw-timestamp': timestamp,
          'x-ncp-iam-access-key': ACCESS_KEY,
          'x-ncp-apigw-signature-v2': signature,
        },
      });

      res.status(SC.OK.status).json(SC.OK);
    } catch (err) {
      res.status(SC.SERVER_ERROR.status).json(SC.SERVER_ERROR);
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
        return res.status(SC.OK.status).json(SC.OK);
      }
      res.status(SC.UNAUTHORIZED.status).json(SC.UNAUTHORIZED);
    } catch (err) {
      res.status(SC.SERVER_ERROR.status).json(SC.SERVER_ERROR);
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
      res.status(SC.CREATED.status).json(SC.CREATED);
    } catch (err) {
      // 오류 발생 시, 500 상태 코드와 함께 에러 메시지 반환
      console.log(err);
      res.status(SC.SERVER_ERROR.status).json(SC.SERVER_ERROR);
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
