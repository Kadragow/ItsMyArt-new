import Post from '../models/Post.js';
import { SERVER_ERROR } from '../utils/constants.js';

export const getPosts = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  try {
    const posts = await Post.paginate(
      {},
      {
        offset: page,
        limit: limit,
        populate: 'user',
        sort: { createdAt: 'asc' },
      }
    );

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(SERVER_ERROR);
  }
};

export const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id).populate('user');

    if (!post) return res.status(404).json({ message: 'Post not found.' });

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(SERVER_ERROR);
  }
};

export const getCurrentUserPosts = async (req, res) => {
  try {
    const id = req.userId;
    const posts = await Post.find({ user: id });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(SERVER_ERROR);
  }
};

export const getPostsByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const posts = await Post.find({ user: id });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(SERVER_ERROR);
  }
};

export const createPost = async (req, res) => {
  try {
    const id = req.userId;
    const post = { ...req.body, user: id };

    const newPost = Post(post);

    await newPost.save();

    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(SERVER_ERROR);
  }
};
