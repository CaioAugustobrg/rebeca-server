
import express from 'express'
import app from './config/app'
const port = process.env.PORT ?? 3000
import cors from 'cors'

// app.use(
//     cors({
//       credentials: true,
//       origin: true
//     })
//   )
app.use(cors())
app.listen(port, () => console.log(
    `O servidor express está rodando em http://localhost:${port}; pressione CTRL + C para o finalizar`
))