import { Router } from "express";
import { genSalt, hash } from "bcrypt";
import { connect, model } from "mongoose";
import "dotenv/config";

import { AdminSchema } from "../models/modelUser.js";

const DBtestRouter = Router();

const MONGO_URI = process.env.MONGO_URI;
const SALT = process.env.SALT;


const Admin = model("admins", AdminSchema);

DBtestRouter.post("/admin/register", async (req, res) => {
    try {
        await connect(MONGO_URI)

        const salt = await genSalt(parseInt(SALT))
        const hashedPassword = await hash(req.body.password, salt)

        //data
        const newAdmin = new Admin({
            email: req.body.email,
            password: hashedPassword,
            name: req.body.name,
            hakbun: req.body.hakbun,
            phone: req.body.phone
        })

        //insert data
        const admin = await newAdmin.save()
        res.status(200).json(admin)
    } catch (err) {
        console.log(err)
        res.status(500).json(`${err}`)
    }
})


export { DBtestRouter }