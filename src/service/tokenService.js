import { token } from 'morgan';
import { JWT_ACCESS, JWT_REFRESH } from '../../constant/constant.js';
import jwt from 'jsonwebtoken';

const tokenService = {
  createAccess: (_id, id) => {
    if (!_id) {
      throw new Error('_ID IS NOT VALID');
    }
    if (!id) {
      throw new Error('ID IS NOT NALID');
    }
    /** Test!!! */ console.log(`createAccess : start Access token create`);
    return jwt.sign(
      {
        _id,
        id,
      },
      JWT_ACCESS,
      {
        expiresIn: '5m',
      }
    );
  },
  createRefresh: (_id, id) => {
    if (!_id) {
      throw new Error('_ID IS NOT VALID');
    }
    if (!id) {
      throw new Error('ID IS NOT NALID');
    }
    /** Test!!! */ console.log(`createAccess : start Refresh token create`);
    return jwt.sign(
      {
        _id,
        id,
      },
      JWT_REFRESH,
      {
        expiresIn: '15d',
      }
    );
  },
  validate: (token) => {
    if (!token) {
      throw new Error('Token Is Not Found');
    }
  },
  verifyAccess: (token) => {},
  verifyRefresh: (token) => {
    try {
      return jwt.verify(token, JWT_REFRESH);
    } catch (err) {
      throw new Error('Refresh Token is Expire');
    }
  },
};
export default tokenService;
//              /** Test!!! */ console.log(`${}`);
