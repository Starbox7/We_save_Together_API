import express, { json } from 'express';
import barbel1 from './router/index.js';

const server = express();
server.use(json());

server.use(barbel1);

//5001
server.listen(parseInt(5002), () => {
  console.log(`[Admin Server is Running] \nin Port [5001] \nand URL [http://localhost:5001/}]`);
});
