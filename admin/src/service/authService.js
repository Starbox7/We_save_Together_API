import { genSalt, hash } from "bcrypt";
import Auth from "../model/Auth.js";

const authService = {
    checkDuplicatedId: async (id) => {
        if (!id) {
            throw new Error('is No id in body')
        }
        const admin = await Auth.findAdminById(id)
        if (admin) {
            throw new Error('Id is duplicated')
        }
    },
    checkDuplicatedHakbun: async (hakbun) => {
        if (!hakbun) {
            throw new Error('is No hakbun in body')
        }
        const admin = await Auth.findAdminByHakbun(hakbun)
        if (admin) {
            throw new Error('Hakbun is duplicated')
        }
    },
    checkDuplicatedEmail: async (email) => {
        if (!email) {
            throw new Error('is No email in body')
        }
        const admin = await Auth.findAdminByEmail(email)
        if (admin) {
            throw new Error('Email is duplicated')
        }
    },
    checkDuplicatedPhone: async (phone) => {
        if (!phone) {
            throw new Error('is No phone in body')
        }
        const admin = await Auth.findAdminByPhone(phone)
        if (admin) {
            throw new Error('Phone is duplicated')
        }
    },
    signup: async ({ id, password, name, hakbun, email }) => {
        if (!id) {
            throw new Error('ID IS INVALID');
        }
        if (!password) {
            throw new Error('PASSWORD IS INVALID');
        }
        if (!name) {
            throw new Error('Name IS INVALID');
        }
        if (!hakbun) {
            throw new Error('Hakbun IS INVALID');
        }
        if (!email) {
            throw new Error('Email IS INVALID');
        }
        const salt = await genSalt(10);
        const hashed = await hash(password, salt)
        const admin = {
            id: id,
            password: hashed,
            name: name,
            hakbun: hakbun,
            email: email,
        }
        await Auth.signup(admin);
    }
}

export default authService;