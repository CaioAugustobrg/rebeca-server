import express from 'express'
import UserRouter from './user.routes'

const router = express.Router()

router.use('/user', UserRouter)
router.get('/', (req,res) => {
    res.type('text/plain')
    res.send('main')
})
export default router