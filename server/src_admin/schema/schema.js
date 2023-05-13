import { Schema, model } from 'mongoose';

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
});

const Notion = new Schema({
  id: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
});

const AdminSchema = model('admin', Admin);
const NotionSchema = model('notion', Notion);

export { AdminSchema, NotionSchema };
