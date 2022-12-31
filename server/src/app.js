import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';

import authRoutes from './routes/auth.js';
import pagesRoutes from './routes/pages.js';

dotenv.config({ path: './.env '});

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/auth', authRoutes);
app.use('/pages', pagesRoutes);

export default app;