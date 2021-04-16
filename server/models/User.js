import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

import { SALT_WORK_FACTOR } from '../utils/constants.js';

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
    maxlength: 30,
    minlength: 5,
  },
  password: {
    type: String,
    required: true,
    maxlength: 30,
    minlength: 5,
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    required: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
  active: {
    type: Boolean,
    default: true,
  },
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (error) {
    return next(error);
  }
});

UserSchema.methods.validatePassword = async function (data) {
  return bcrypt.compare(data, this.password);
};

const User = mongoose.model('User', UserSchema);

export default User;
