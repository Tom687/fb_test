import express from 'express';
import { getPagesAccessToken, getPageInsights } from '../controllers/pages.js';

const router = express.Router();

router.post('/', getPagesAccessToken);
router.post('/insights', getPageInsights);

export default router;