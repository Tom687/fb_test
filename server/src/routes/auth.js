import express from 'express';
import * as querystring from 'querystring';
import { facebookAuth } from '../controllers/auth.js';

const router = express.Router();

router.get('/facebook', facebookAuth);