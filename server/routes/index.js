import express from 'express';
import { getIndex } from '../controllers/index.js';

const router = express.Router();

router.get('/');

export default router;
