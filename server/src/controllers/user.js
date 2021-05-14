import User from '../models/User.js';
import { userDto } from '../dto/user.js';
import { SERVER_ERROR } from '../utils/constants.js';

export const getUsers = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  try {
    const users = await User.paginate(
      {},
      {
        offset: page,
        limit: limit,
        populate: 'role',
        sort: { email: 'asc' },
      }
    );

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(SERVER_ERROR);
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate('role');

    if (!user) return res.status(404).json({ message: 'User not found.' });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(SERVER_ERROR);
  }
};

export const getMe = async (req, res) => {
  try {
    const id = req.userId;
    const user = await User.findById(id).select('-posts').populate('role');

    if (!user) return res.status(404).json({ message: 'User not found.' });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(SERVER_ERROR);
  }
};
