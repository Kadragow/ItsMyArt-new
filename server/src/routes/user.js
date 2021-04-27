import express from 'express';
import auth from '../middleware/auth.js';
import { getUsers, getUser, getMe } from '../controllers/user.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/me', auth, getMe);
router.get('/:id', auth, getUser);

export default router;
