import { genSalt, hash, compare } from 'bcrypt';
import Auth from '../model/Auth.js';
import { MONGO_URI, SANS_DATA } from '../constant/constant.js';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import { connect } from 'mongoose';

const authService = {
  checkDuplicatedId: async (id) => {
    if (!id) {
      throw new Error('is No id in body');
    }
    const admin = await Auth.findAdminById(id);
    if (admin) {
      throw new Error('Id is duplicated');
    }
  },
  checkDuplicatedHakbun: async (hakbun) => {
    if (!hakbun) {
      throw new Error('is No hakbun in body');
    }
    const admin = await Auth.findAdminByHakbun(hakbun);
    if (admin) {
      throw new Error('Hakbun is duplicated');
    }
  },
  checkDuplicatedEmail: async (email) => {
    if (!email) {
      throw new Error('is No email in body');
    }
    const admin = await Auth.findAdminByEmail(email);
    if (admin) {
      throw new Error('Email is duplicated');
    }
  },
  checkDuplicatedPhone: async (phone) => {
    if (!phone) {
      throw new Error('is No phone in body');
    }
    const admin = await Auth.findAdminByPhone(phone);
    if (admin) {
      throw new Error('Phone is duplicated');
    }
  },
  signup: async ({ id, password, name, hakbun, email }) => {
    if (!id) {
      throw new Error('ID IS INVALID');
    }
    if (!password) {
      throw new Error('PASSWORD IS INVALID');
    }
    if (!name) {
      throw new Error('Name IS INVALID');
    }
    if (!hakbun) {
      throw new Error('Hakbun IS INVALID');
    }
    if (!email) {
      throw new Error('Email IS INVALID');
    }
    const salt = await genSalt(10);
    const hashed = await hash(password, salt);
    const admin = {
      id: id,
      password: hashed,
      name: name,
      hakbun: hakbun,
      email: email,
    };
    await Auth.signup(admin);
  },
  findAdminById: async (id) => {
    if (!id) {
      throw new Error('ID is Invalid');
    }
    const admin = await Auth.findAdminById(id);
    if (!admin) {
      throw new Error('Admin not found');
    }
    return admin;
  },
  checkPassword: async (adminPassword, dbPassword) => {
    if (!adminPassword) {
      throw new Error('PASSWORD IS INVALID');
    }
    if (!dbPassword) {
      throw new Error('DB PASSWORD IS INVALID');
    }
    const validated = await compare(adminPassword, dbPassword);
    if (!validated) {
      throw new Error('PASSWORD IS INVALID');
    }
  },
  authRequest: async (phone) => {
    const SERVICE_ID = SANS_DATA.SERVICE_ID;
    const ACCESS_KEY = SANS_DATA.ACCESS_KEY;
    const SECRET_KEY = SANS_DATA.SECRET_KEY;

    const url = `https://sens.apigw.ntruss.com/sms/v2/services/${SERVICE_ID}/messages`;

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

    const num = makeAuthNum();
    const content = `[We save Together] 인증번호는 ${num} 입니다.`;
    const to = phone;

    const payload = {
      type: 'SMS',
      contentType: 'COMM',
      countryCode: '82',
      from: SANS_DATA.FROM_PHONE,
      content: content,
      messages: [
        {
          to,
        },
      ],
    };

    const { signature, timestamp } = makeSignature('POST', `/sms/v2/services/${SERVICE_ID}/messages`);

    try {
      await axios.post(url, payload, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'x-ncp-apigw-timestamp': timestamp,
          'x-ncp-iam-access-key': ACCESS_KEY,
          'x-ncp-apigw-signature-v2': signature,
        },
      });

      return num;
    } catch (error) {
      console.log(error);
      throw new Error(`SMS send error : ${error}`);
    }
  },
  updatePw: async (id, password) => {
    try {
      const admin = Auth.findAdminById(id);
      const salt = await genSalt(10);
      const hashed = await hash(password, salt);
      const newAdmin = {
        ...admin,
        password: hashed,
      };
      await Auth.findAdminAndPwUpdate(id, newAdmin);
    } catch (err) {
      throw new Error(`updatePw error : ${error}`);
    }
  },
};

export default authService;
//              /** Test!!! */ console.log(`${}`);
