import express, { json } from "express";
import barbel1 from "./router/index.js";

const server = express();
server.use(json());

server.use(barbel1);

server.listen(parseInt(5001), () => {
  console.log(
    `[Admin Server is Running] \nin Port [5001] \nand URL [http://127.0.0.1:5001/}]`
  );
});
