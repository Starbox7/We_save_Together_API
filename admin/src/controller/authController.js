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
      /** Test!!! */ console.log(`signin : ${admin}`);
      await authService.checkPassword(password, admin.password);
      const objectId = admin._id.toString();
      const newAccessToken = tokenService.createAccess(objectId, admin.id);
      const newRefreshToken = tokenService.createRefresh(objectId, admin.id);
      return res.status(StatusCode.OK.status).json({
        ...StatusCode.OK,
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      });
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
