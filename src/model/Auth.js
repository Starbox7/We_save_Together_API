import { connect, disconnect } from 'mongoose';
import { AdminSchema } from '../schema/schema.js';
import { MONGO_URI } from '../constant/constant.js';

const Auth = {
  findAdminById: async (id) => {
    try {
      await connect(MONGO_URI);
      const admin = await AdminSchema.findOne({ id: id });
      await disconnect();
      return admin;
    } catch (err) {
      /** Test!!! */ console.log(`findAdminById Error : ${err}`);
      throw new Error('DB error : findAdminById');
    }
  },
  findAdminByHakbun: async (hakbun) => {
    try {
      await connect(MONGO_URI);
      const admin = await AdminSchema.findOne({ hakbun: hakbun });
      await disconnect();
      return admin;
    } catch (err) {
      throw new Error('DB error : findAdminByHakbun');
    }
  },
  findAdminByEmail: async (email) => {
    try {
      await connect(MONGO_URI);
      const admin = await AdminSchema.findOne({ email: email });
      await disconnect();
      return admin;
    } catch (err) {
      throw new Error('DB error : findAdminByEmail');
    }
  },
  findAdminByPhone: async (phone) => {
    try {
      await connect(MONGO_URI);
      const admin = await AdminSchema.findOne({ phone: phone });
      await disconnect();
      return admin;
    } catch (err) {
      throw new Error('DB error : findAdminByPhone');
    }
  },
  signup: async ({ id, password, name, hakbun, email }) => {
    const newAdmin = new AdminSchema({
      id: id,
      password: password,
      name: name,
      hakbun: hakbun,
      email: email,
    });
    try {
      await connect(MONGO_URI);
      const admin = await newAdmin.save();
      /** Test!!! */ console.log(`signup : ${admin}`);
    } catch (err) {
      /** Test!!! */ console.log(`DB signup Error : ${err}`);
      throw new Error('DB error : signup');
    }
  },
  findAdminAndUpdate: async (id, phone) => {
    try {
      await connect(MONGO_URI);
      await AdminSchema.findOneAndUpdate({ id: id }, { phone: phone, authNum: 'true' });
    } catch (err) {
      throw new Error(`DB Error : ${err}`);
    }
  },
  findId: async (hakbun, email) => {
    try {
      await connect(MONGO_URI);
      return await AdminSchema.findOne({ hakbun: hakbun, email: email });
    } catch (err) {
      throw new Error(`DB Error : ${err}`);
    }
  },
  findPw: async (id, phone) => {
    try {
      await connect(MONGO_URI);
      return await AdminSchema.findOne({ id: id, phone: phone });
    } catch (err) {
      throw new Error(`DB Error : ${err}`);
    }
  },
  findAdminAndPwUpdate: async (id, admin) => {
    try {
      await connect(MONGO_URI);
      await AdminSchema.findOneAndUpdate({ id: id }, admin);
    } catch (err) {
      throw new Error(`DB Error : ${err}`);
    }
  },
  deleteAdmin: async (id) => {
    try {
      await connect(MONGO_URI);
      await AdminSchema.findOneAndDelete({ id: id });
    } catch (err) {
      throw new Error(`DB Error : ${err}`);
    }
  },
};
export default Auth;
//              /** Test!!! */ console.log(`${}`);
