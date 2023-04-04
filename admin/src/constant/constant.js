import 'dotenv/config';
/** Server Data */
export const SERVER_URL = process.env.SERVER_URL;
export const SERVER_PORT = process.env.SERVER_PORT;
/** Security Data */
export const MAJOR = process.env.MAJOR;
/** Mongo Database URI */
export const MONGO_URI = process.env.MONGO_URI;
/** SANS Data */
export const SANS_DATA = {
  FROM_PHONE: process.env.FROM_PHONE,
  SERVICE_ID: process.env.SERVICE_ID,
  ACCESS_KEY: process.env.ACCESS_KEY,
  SECRET_KEY: process.env.SECRET_KEY,
};
/** JWT Security Data */
export const JWT_ACCESS = process.env.JWT_ACCESS;
export const JWT_REFRESH = process.env.JWT_REFRESH;
