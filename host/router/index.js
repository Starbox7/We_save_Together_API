import { Router } from "express";

const barbel1 = Router();

barbel1.post("/name", (req, res) => {
  const { name } = req.body;
  //find id
  return res.status(200).json({ id: name });
});

barbel1.post("/signup", (req, res) => {
  const { name, pw, email } = req.body;
  return res.status(200).json({ OK: "OK" });
});

export default barbel1;
