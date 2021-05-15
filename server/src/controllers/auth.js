import jwt from 'jsonwebtoken';

import User from '../models/User.js';
import Role from '../models/Role.js';
import { SECRET_TOKEN_NAME, SERVER_ERROR } from '../utils/constants.js';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email })
      .select('+password -posts')
      .populate('role');

    if (!user)
      return res.status(400).json({ email: { message: 'Invalid e-mail.' } });

    const isPasswordCorrect = await user.validatePassword(password);

    if (!isPasswordCorrect)
      return res
        .status(400)
        .json({ password: { message: 'Invalid password.' } });

    const token = jwt.sign(
      { email: user.email, id: user.id },
      SECRET_TOKEN_NAME,
      { expiresIn: '1h' }
    );

    user.password = undefined;

    res.status(200).json({ result: user, token });
  } catch (error) {
    res.status(500).json(SERVER_ERROR);
  }
};

export const register = async (req, res) => {
  const { email, nickname, password, repeatPassword } = req.body;
  const errors = {};

  if (password !== repeatPassword) {
    errors.password = { message: 'Passwords are different.' };
    errors.repeatPassword = { message: 'Passwords are different.' };
  }

  try {
    const checkEmail = await User.findOne({ email });

    if (checkEmail) errors.email = { message: 'Email is already in use.' };

    const checkLogin = await User.findOne({ nickname });

    if (checkLogin) errors.nickname = { message: 'Nickname is already taken.' };

    if (Object.keys(errors).length !== 0) return res.status(400).json(errors);

    const role = await Role.findOne({ name: 'User' });

    if (!role)
      return res.status(404).json({ message: 'Role "User" not found.' });

    let result = await User.create({
      email,
      nickname,
      password,
      role: role._id,
    });

    result = await result.populate('role').execPopulate();
    result.password = undefined;

    const token = jwt.sign(
      { email: result.email, id: result.id },
      SECRET_TOKEN_NAME,
      { expiresIn: '1h' }
    );

    res.status(201).json({ result, token });
  } catch (error) {
    console.log(error);
    res.status(500).json(SERVER_ERROR);
  }
};
