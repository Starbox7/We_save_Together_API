/** import Library */
import express, { urlencoded, json } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
/** */
import { SERVER_URL, SERVER_PORT } from './src_admin/constant/constant.js';
/** import Router */
import adminRouter from './src_admin/routes/index.js';
import { isDev } from './src_admin/config/dev.js';
import userRouter from './src_user/index.js';

/** Create express instance */
const server = express();

/**
 * use WA-SANS for Naver
 * Express middlware for Json parsing
 * */
server.use(cors());
server.use(json());
server.use(urlencoded({ extended: true }));
/** 바디파서 Deprecated. 아무래도 ES6 버전에서 바디는 기본으로 파싱해주는 모양이다. */
// server.use(bodyParser().json);
server.use(cookieParser());

/** Routing */
server.use(userRouter);
server.use(adminRouter);

server.listen(parseInt(SERVER_PORT), () => {
  console.log(`  ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ`);
  console.log(`ㅣ [Admin Server is Running] in Port [${SERVER_PORT}] and URL [${SERVER_URL}]            ㅣ`);
  console.log(`ㅣ ${SERVER_PORT == 5000 ? 'Hello Window!  :D' : 'Hello MAC!     :D'}                                                              ㅣ`);
  console.log(`ㅣ ${isDev ? '현재 Dev MONGO 데이터베이스를 사용중입니다!' : '현재 Main MONGO 데이터베이스를 사용중입니다!'}                                   ㅣ`);
  console.log(`ㅣ ${isDev ? '데이터베이스 변경 희망시 ./src/config/dev.js에서 isDev를 true로 변경하세요.' : '데이터베이스 변경 희망시 ./src/config/dev.js에서 isDev를 false로 변경하세요.'}   ㅣ`);
  console.log(`  ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ`);
});
