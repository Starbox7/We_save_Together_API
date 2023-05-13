import errorCatch from '../util/errorCatch.js';
import tokenService from '../service/tokenService.js';

export const checkAccess = (req, res, next) => {
  const accessToken = req.body.accessToken ?? '';

  const { _id, verify } = tokenService.verifyAccess(accessToken);
  if (verify) {
    req.body._id = _id;
    return next('route');
  }
  return next();
};

export const checkRefresh = (req, res, next) => {
  const refreshToken = req.get('refreshToken') ?? '';
  try {
    const data = tokenService.verifyRefresh(refreshToken);
    const newAccessToken = tokenService.createAccess(data._id, data.id);
    const newRefreshToken = tokenService.createRefresh(data._id, data.id);
    req.body._id = data._id;
    req.body.accessToken = newAccessToken;
    req.body.refreshToken = newRefreshToken;
    return next();
  } catch (err) {
    return errorCatch(err, res);
  }
};
