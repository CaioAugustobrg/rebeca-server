import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from '../routes';
import bodyParser from 'body-parser';

const app = express();

// Configure CORS
app.use(cors({
    origin: 'https://rebbeca-birthday-caio-augusto-da-silva-bragas-projects.vercel.app/', // Specify the front-end origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://rebbeca-birthday-caio-augusto-da-silva-bragas-projects.vercel.app/"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "https://rebbeca-birthday-caio-augusto-da-silva-bragas-projects.vercel.app/"
  );
  res.header(
    "Access-Control-Allow-Origin",
    "X-Requested-With, Content-Type, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,PATCH,POST,DELETE,OPTIONS"
  );

  next();
});
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser('keyboard cat'));
app.use(router);

export default app;
