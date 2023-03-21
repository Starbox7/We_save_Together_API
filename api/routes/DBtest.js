import { Router } from "express";
import { compare, genSalt, hash } from "bcrypt";
import { connect, Schema, model } from "mongoose";
import "dotenv/config";

const DBtestRouter = Router();

const MONGO_URI = process.env.MONGO_URI;
const SALT = process.env.SALT;

const UserSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})
const User = model("users", UserSchema);

DBtestRouter.post("/register", async (req, res) => {
    try {
        await connect(MONGO_URI)

        const salt = await genSalt(parseInt(SALT))
        const hashedPassword = await hash(req.body.password, salt)

        //data
        const newUser = new User({
            id: req.body.id,
            password: hashedPassword,
        })

        //insert data
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
        res.status(500).json(`${err}`)
    }
})


export { DBtestRouter }