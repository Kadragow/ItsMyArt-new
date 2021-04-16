import User from '../models/User.js';
import { userDto } from '../dto/user.js';
import { SERVER_ERROR } from '../utils/constants.js';

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate('role');

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(SERVER_ERROR);
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).populate('role');

    if (!user) return res.status(404).json({ message: 'User not found.' });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(SERVER_ERROR);
  }
};
