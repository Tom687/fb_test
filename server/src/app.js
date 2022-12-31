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
//app.use(bodyParser.json({limit: '50mb'}));
//app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
/*app.use((req,res,next)=>{
  console.log(req.method);
  console.log(req.baseUrl)
  res.header('Access-Control-Allow-Headers, *, Access-Control-Allow-Origin', 'Origin, X-Requested-with,' +
    ' Content_Type,Accept,Authorization','http://localhost:3000');
  if(req.method === 'OPTIONS') {
    //res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    return res.status(200).json({});
  }
  next();
});*/
/*app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000'
  })
);*/

app.use('/auth', authRoutes);
app.use('/pages', pagesRoutes);

export default app;