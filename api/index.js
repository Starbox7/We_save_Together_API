import express from "express";
import dotenv, { config } from "dotenv";
import { DBtestRouter } from "./routes/DBtest.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/DBtest", DBtestRouter);

/** 맥에서 5000번 사용 불가 */
app.listen(PORT, () => {
  console.log("We save Together API is running");
});