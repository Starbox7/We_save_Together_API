import { connect } from 'mongoose'
import { AdminSchema } from '../schema/schema.js'
import { MONGO_URI } from '../constant/constant.js'

const Auth = {
    findAdminById: async (id) => {
        try {
            return await AdminSchema.findOne({ id: id })
        } catch (err) {
            /** Test!!! */ console.log(`findAdminById Error : ${err}`);
            throw new Error('DB error : findAdminById')
        }
    },
    findAdminByHakbun: async (hakbun) => {
        try {
            return await AdminSchema.findOne({ hakbun: hakbun })
        } catch (err) {
            throw new Error('DB error : findAdminByHakbun')
        }
    },
    findAdminByEmail: async (email) => {
        try {
            return await AdminSchema.findOne({ email: email })
        } catch (err) {
            throw new Error('DB error : findAdminByEmail')
        }
    },
    findAdminByPhone: async (phone) => {
        try {
            return await AdminSchema.findOne({ phone: phone })
        } catch (err) {
            throw new Error('DB error : findAdminByPhone')
        }
    },
    signup: async ({ id, password, name, hakbun, email }) => {
        const newAdmin = new AdminSchema({
            id: id,
            password: password,
            name: name,
            hakbun: hakbun,
            email: email
        });
        try {
            await connect(MONGO_URI)
            const admin = await newAdmin.save()
            /** Test!!! */ console.log(`signup : ${admin}`);
        } catch (err) {
            /** Test!!! */ console.log(`DB signup Error : ${err}`);
            throw new Error('DB error : signup')
        }

    }
}
export default Auth;
//              /** Test!!! */ console.log(`${}`);