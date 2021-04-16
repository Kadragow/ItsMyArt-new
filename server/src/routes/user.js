import express from 'express';
import auth from '../middleware/auth.js';
import { getUsers, getUser } from '../controllers/user.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', auth, getUser);

export default router;
