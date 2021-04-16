import express from 'express';
import { getRoles } from '../controllers/role.js';

const router = express.Router();

router.get('/getRoles', getRoles);

export default router;
