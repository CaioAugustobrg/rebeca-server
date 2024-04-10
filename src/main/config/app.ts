import express from 'express'
import cookieParser from 'cookie-parser'
// import router from '../routes'
import cors from 'cors'
// setupExpressSession(app)
import router from '../routes'
import bodyParser from 'body-parser'
// import { setupExpressSession } from './express-session'
const app = express()
app.use(cors({
    origin: 'https://rebbeca-birthday.vercel.app/', // Altere para a URL do seu front-end
    credentials: true // Permitir credenciais
  }));
app.use(express.json())
app.use(router)
app.use(bodyParser.json())
app.use(express.json())
app.use(cookieParser('keyboard cat'))
// app.use(cors({
//   origin: true,
//   credentials: true
// }))
// app.use(
//     cors({
//       credentials: true,
//       origin: true
//     })
//   )
//   app.use((req, res, next) => {
//     res.header(
//       'Access-Control-Allow-Origin',
//       'http://127.0.0.1:5173'
//     )
//     res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept'
//     )
//     res.header(
//       'Access-Control-Allow-Methods',
//       'GET,PUT,PATCH,POST,DELETE,OPTIONS'
//     )
//     next()
//   })
export default app
