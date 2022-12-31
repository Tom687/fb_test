import express from 'express';
import { getPosts } from '../controllers/pages.js';

const router = express.Router();

//router.get('/')
router.post('/', getPosts);

export default router;