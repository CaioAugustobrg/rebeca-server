import express from 'express';
import app from './config/app';
const port = process.env.PORT || 3000;
const host = process.env.HOST || "127.0.0.1";
import cors from 'cors';

app.use(cors());

app.listen(host, () => console.log(
    `O servidor express está rodando em http://${host}:${port}; pressione CTRL + C para finalizar`
));
