import {Router} from 'express'
import {register, login, getMe} from '../controllers/auth.js'
import { checkAuth } from '../middleware/checkAuth.js'

const router = new Router()

// Register
// http://localhost:3002/api/auth/register
router.post('/register', register)

// Login
// http://localhost:3002/api/auth/login
router.post('/login', login)

// http://localhost:3002/api/auth/me
router.get('/me', checkAuth, getMe)


export default router