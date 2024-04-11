import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from '../routes';
import bodyParser from 'body-parser';

const app = express();

// Configure CORS
// Configure CORS
app.use(cors({
  origin: [
      'https://rebbeca-birthday.vercel.app', // Principal domínio
      'https://rebbeca-birthday-git-main-caio-augusto-da-silva-bragas-projects.vercel.app', // Ambiente de desenvolvimento
      'https://rebbeca-birthday-e5hutn1pv.vercel.app' // Outro ambiente
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Permite credenciais (cookies, headers de autorização, etc.)
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
