import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const SALT_WORK_FACTOR = 10;

const UserSchema = mongoose.Schema({
  nickname: {
    type: String,
    required: true,
    maxlength: 30,
    minlength: 5,
  },
  email: {
    type: String,
    required: true,
  },
  login: {
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
  active: {
    type: Boolean,
    default: true,
  },
});

UserSchema.pre('save', async (next) => {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (error) {
    return next(error);
  }
});

UserSchema.methods.validatePassword = async (data) => {
  return bcrypt.compare(data, this.password);
};

const User = mongoose.Model('User', UserSchema);

export default User;
