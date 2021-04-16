import express from 'express';
import mongoose from 'mongoose';

import Post from '../models/Post.js';

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
