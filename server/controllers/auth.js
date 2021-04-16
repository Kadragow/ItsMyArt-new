import jwt from 'jsonwebtoken';

import User from '../models/User.js';
import Role from '../models/Role.js';
import { SECRET_TOKEN_NAME, SERVER_ERROR } from '../utils/constants.js';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: 'User not found.' });

    const isPasswordCorrect = user.validatePassword(password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Invalid password' });

    const token = jwt.sign(
      { email: user.email, id: user.id },
      SECRET_TOKEN_NAME,
      { expiresIn: '1h' }
    );

    res.status(200).json({ result: user, token });
  } catch (error) {
    res.status(500).json(SERVER_ERROR);
  }
};

export const register = async (req, res) => {
  const { email, login, password } = req.body;

  try {
    const checkEmail = await User.findOne({ email });

    if (checkEmail)
      return res.status(400).json({ message: 'Email is already in use.' });

    const checkLogin = await User.findOne({ login });

    if (checkLogin)
      return res.status(400).json({ message: 'Login is already taken.' });

    const role = Role.findOne({ name: 'User' });

    if (!role) return res.status(500).json(SERVER_ERROR);

    const result = await User.create({ email, login, password, role: role.id });
    const token = jwt.sign(
      { email: result.email, id: result.id },
      SECRET_TOKEN_NAME,
      { expiresIn: '1h' }
    );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json(SERVER_ERROR);
  }
};
