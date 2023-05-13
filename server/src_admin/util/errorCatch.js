import StatusCode from './StatusCode.js';

const errorCatch = (err, res) => {
  if (err) {
    return res.status(err.statusCode.status).json({ ...err.statusCode, message: err.message, name: err.name });
  }
  return res.status(StatusCode.SERVER_ERROR.status).json(StatusCode.SERVER_ERROR);
};

export default errorCatch;
