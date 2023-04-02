import { Schema } from "mongoose"

export const AdminSchema = new Schema({
    email: {
        type: String,
        required: true,
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
        required: true,
    }
})