import { Schema, model } from 'mongoose';

export const AdminSchema = new Schema({
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
    required: false,
  },
  hakbun: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: true,
  },
  authNum: {
    type: String,
    require: false,
  },
});

const Admin = model('admins', AdminSchema);

export { Admin };
