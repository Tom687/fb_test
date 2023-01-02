import express from 'express';
import { getPagesAccessToken } from '../controllers/pages.js';

const router = express.Router();

router.post('/', getPagesAccessToken);

export default router;