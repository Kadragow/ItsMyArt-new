import express from 'express';
import multer from 'multer';
import auth from '../middleware/auth.js';
import {
  getPosts,
  getPost,
  getCurrentUserPosts,
  getPostsByUserId,
  createPost,
} from '../controllers/post.js';

const upload = multer();
const router = express.Router();

router.get('/', getPosts);
router.get('/single/:id', getPost);
router.get('/my', auth, getCurrentUserPosts);
router.get('/user/:id', getPostsByUserId);

router.post('/create', upload.single('file'), auth, createPost);

export default router;
