import jwt from 'jsonwebtoken';
import tokenService from '../service/tokenService';

const Auth = (req, res, next) => {
  const accessToken = req.body.accessToken ?? req.get('accessToken');
  const refreshToken = req.body.refreshToken ?? req.get('refreshToken');
  const { _id, verify } = tokenService.verifyAccess(accessToken);
  if (verify) {
    req.body._id = _id;
    return next();
  }
  const data = tokenService.verifyRefresh(refreshToken);
  const newAccessToken = tokenService.createAccess(data._id, data.id);
  const newRefreshToken = tokenService.createRefresh(data._id, data.id);
  req.body._id = data._id;
  req.body.accessToken = newAccessToken;
  req.body.refreshToken = newRefreshToken;
  return next();
};

export default Auth;
