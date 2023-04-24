/** import Library */
import express, { urlencoded, json } from 'express';
import cors from 'cors';
import { SERVER_URL, SERVER_PORT } from './src/constant/constant.js';
/** import Router */
import router from './src/routes/index.js';

/** Create express instance */
const server = express();

/**
 * use WA-SANS for Naver
 * Express middlware for Json parsing
 * */
server.use(cors());
server.use(json());
server.use(urlencoded({ extended: true }));

/** Routing */
server.use(router);

server.listen(parseInt(SERVER_PORT), () => {
  console.log(`[Admin Server is Running] in Port [${SERVER_PORT}] and URL [${SERVER_URL}]`);
  console.log(`${SERVER_PORT == 5000 ? 'Hello Window!  :D' : 'Hello MAC!  :D'}`);
});
