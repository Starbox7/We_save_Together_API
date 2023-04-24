import Auth from '../model/Auth.js';
import authService from '../service/authService.js';
import tokenService from '../service/tokenService.js';
import StatusCode from '../util/StatusCode.js';

const authController = {
  signup: async (req, res) => {
    const { id, password, name, hakbun, email } = req.body;
    try {
      await authService.checkDuplicatedId(id);
      await authService.checkDuplicatedHakbun(hakbun);
      await authService.checkDuplicatedEmail(email);

      await authService.signup({ id, password, name, hakbun, email });
      return res.status(StatusCode.CREATED.status).json(StatusCode.CREATED);
    } catch (err) {
      /** Test!!! */ console.log(`signup Error : ${err}`);
      return res.status(StatusCode.SERVER_ERROR.status).json(StatusCode.SERVER_ERROR);
    }
  },
  signin: async (req, res) => {
    const { id, password } = req.body;
    try {
      const admin = await authService.findAdminById(id);
      if (!admin.phone) {
        return res.status(StatusCode.OK.status).json({
          ...StatusCode.OK,
        });
      }
      await authService.checkPassword(password, admin.password);
      const objectId = admin._id.toString();
      const newAccessToken = tokenService.createAccess(objectId, admin.id);
      const newRefreshToken = tokenService.createRefresh(objectId, admin.id);
      return res.status(StatusCode.OK.status).json({
        ...StatusCode.OK,
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
        phone: admin.phone,
        id: id,
      });
    } catch (err) {
      return res.status(StatusCode.SERVER_ERROR.status).json({
        ...StatusCode.SERVER_ERROR,
        err: `${err}`,
      });
    }
  },
  auto: async (req, res) => {
    const refreshToken = req.get('refreshToken') ?? '';
    try {
      tokenService.validate(refreshToken);
      const { _id, id } = tokenService.verifyRefresh(refreshToken);
      await authService.findAdminById(id);
      const newAccessToken = tokenService.createAccess(_id, id);
      const newRefreshToken = tokenService.createRefresh(_id, id);
      return res.status(StatusCode.OK.status).json({
        ...StatusCode.OK,
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
        id: id,
      });
    } catch (err) {
      return res.status(StatusCode.SERVER_ERROR.status).json({
        ...StatusCode.SERVER_ERROR,
        err: `${err}`,
      });
    }
  },
  authRequest: async (req, res) => {
    try {
      const sms = await authService.authRequest(req.params.phone);
      return res.status(StatusCode.OK.status).json({ ...StatusCode.OK, smsNum: sms });
    } catch (err) {
      return res.status(StatusCode.SERVER_ERROR.status).json({
        ...StatusCode.SERVER_ERROR,
        err: `${err}`,
      });
    }
  },
  authConfirm: async (req, res) => {
    try {
      if (!req.params.id) {
        throw new Error('authConfirm : No Id here');
      }
      if (!req.params.phone) {
        throw new Error('authConfirm : No Phone Num here');
      }
      await Auth.findAdminAndUpdate(req.params.id, req.params.phone);
      return res.status(StatusCode.OK.status).json({ ...StatusCode.OK });
    } catch (err) {
      return res.status(StatusCode.SERVER_ERROR.status).json({
        ...StatusCode.SERVER_ERROR,
        err: `${err}`,
      });
    }
  },
  findId: async (req, res) => {
    const hakbun = req.body.hakbun;
    const email = req.body.email;
    try {
      const admin = await Auth.findId(hakbun, email);
      if (!admin) {
        throw new Error('Info is not Admin');
      }
      return res.status(StatusCode.OK.status).json({ ...StatusCode.OK, id: admin.id });
    } catch (err) {
      return res.status(StatusCode.SERVER_ERROR.status).json({
        ...StatusCode.SERVER_ERROR,
        err: `${err}`,
      });
    }
  },
  findPwAuth: async (req, res) => {
    const id = req.body.id;
    const phone = req.body.phone;
    const admin = await Auth.findPw(id, phone);
    if (!admin) {
      throw new Error(`There is no admin in client information`);
    }
    const sms = await authService.authRequest(phone);

    try {
      return res.status(StatusCode.OK.status).json({ ...StatusCode.OK, smsNum: sms });
    } catch (err) {
      return res.status(StatusCode.SERVER_ERROR.status).json({
        ...StatusCode.SERVER_ERROR,
        err: `${err}`,
      });
    }
  },
  updatePw: async (req, res) => {
    const id = req.body.id;
    const password = req.body.password;
    try {
      await authService.updatePw(id, password);
      return res.status(StatusCode.OK.status).json({ ...StatusCode.OK });
    } catch (err) {
      return res.status(StatusCode.SERVER_ERROR.status).json({
        ...StatusCode.SERVER_ERROR,
        err: `${err}`,
      });
    }
  },
  deleteAdmin: async (req, res) => {
    const id = req.params.id;
    try {
      await Auth.deleteAdmin(id);
      return res.status(StatusCode.OK.status).json({ ...StatusCode.OK });
    } catch (err) {
      return res.status(StatusCode.SERVER_ERROR.status).json({
        ...StatusCode.SERVER_ERROR,
        err: `${err}`,
      });
    }
  },
};

export default authController;
//              /** Test!!! */ console.log(`${}`);
