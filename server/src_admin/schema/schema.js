import { Schema, model } from 'mongoose';
import moment from 'moment';

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

const User = new Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  user_id: {
    type: String,
    unique: 1,
  },
  email: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
  },
  password: {
    type: String,
    minlength: 5,
  },
  address: {
    type: String,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
  dateOfBirth: {
    type: Date,
  },
  phoneNumber: {
    type: String,
  },
  havingPoint: {
    type: Number,
    default: 0,
  },
  havingVolunteerTime: {
    type: Number,
    default: 0,
  },
  doingCampagins: {
    type: Number,
    default: 0,
  },
  completeCampagins: {
    type: Number,
    default: 0,
  },
  avatar_name: {
    type: String,
  },
  avatar_image: {
    data: Buffer,
    contentType: String,
  },
  register_campagin: [
    {
      register_campaginName: { type: String },
      register_status: { type: Boolean },
    },
  ],
  complete_campagin: [
    {
      complete_campaginName: { type: String },
      complete_status: { type: Boolean },
      complete_image: { type: String },
    },
  ],
});

const Campagin = new Schema({
  campagin_name: {
    type: String,
    maxlength: 50,
  },
  campagin_operatingDate: {
    type: Date,
    default: moment().format('YYYY-MM-DD'),
  },
  campagin_point: {
    type: Number,
    default: 30,
  },
  image: String,
  campagin_volunteerTimer: {
    type: Number,
    default: 3,
  },
  register_user: [
    {
      register_userId: { type: String },
      register_status: { type: Boolean },
    },
  ],
  complete_user: [
    {
      complete_userId: { type: String },
      complete_status: { type: Boolean },
      complete_imgae: { type: String },
    },
  ],
});

const AdminSchema = model('admin', Admin);
const NotionSchema = model('notion', Notion);
const UserSchema = model('user', User);
const CampaginSchema = model('campagin', Campagin);

export { AdminSchema, NotionSchema, UserSchema, CampaginSchema };
