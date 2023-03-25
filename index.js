// import 필요한 모듈들
import express from "express";
import dotenv from "dotenv";
import { DBtestRouter } from "./routes/DBtest.js";

// dotenv를 사용하여 환경 변수를 설정
dotenv.config();

// express 앱 인스턴스를 생성
const app = express();

// 환경변수에서 포트 번호를 가져옴
const PORT = process.env.PORT;

// JSON 파싱을 위해 express.json 미들웨어 사용
app.use(express.json());

/**
 * /test 경로에 대한 라우팅을 처리하기 위해
 * DBtestRouter를 사용합니다.
 */
app.use("/test", DBtestRouter);

/**
 * 앱이 설정된 포트에서 실행되며,
 * 시작되면 콘솔에 메시지를 출력합니다.
 */
app.listen(PORT, () => {
  console.log("We save Together API is running\nPORT : " + PORT);
});
