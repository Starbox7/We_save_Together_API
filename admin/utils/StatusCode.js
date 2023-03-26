const SC = {
  OK: {
    status: 200,
    message: 'OK',
  },
  CREATED: {
    status: 201,
    message: 'CREATED',
  },
  BAD_REQUEST: {
    status: 400,
    message: 'BAD REQUEST',
  },
  UNAUTHORIZED: {
    status: 401,
    message: 'UNAUTHORIZED',
  },
  NOT_FOUND: {
    status: 404,
    message: 'NOT FOUND',
  },
  CONFLICT: {
    status: 409,
    message: 'CONFLICT',
  },
  SERVER_ERROR: {
    status: 500,
    message: 'INTERNAL SERVER ERROR',
  },
};

export default SC;
