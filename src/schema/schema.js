import { Schema, model } from "mongoose";

const Admin = new Schema({
    id: {
        type: String,
        required: false,
        unique: true,
    },
    email: {
        type: String,
        required: false,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    hakbun: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    authNum: {
        type: String,
        require: false,
    },
})
const AdminSchema = model('admin', Admin);
export { AdminSchema }