import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from '../routes';
import bodyParser from 'body-parser';

const app = express();

// Configure CORS
app.use(cors({
  origin: 'https://rebbeca-birthday.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));
  

  // app.use((req, res, next) => {
  //   res.header(
  //     "Access-Control-Allow-Origin",
  //     "https://rebbeca-birthday.vercel.app, https://rebbeca-birthday.vercel.app"
  //   );
  //   res.header(
  //     "Access-Control-Allow-Headers",
  //     "Origin, X-Requested-With, Content-Type, Accept"
  //   );
  //   res.header(
  //     "Access-Control-Allow-Origin",
  //     "X-Requested-With, Content-Type, Authorization"
  //   );
  //   res.header(
  //     "Access-Control-Allow-Methods",
  //     "GET,PUT,PATCH,POST,DELETE,OPTIONS"
  //   );
  
  //   next();
  // });
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser('keyboard cat'));
app.use(router);

export default app;
