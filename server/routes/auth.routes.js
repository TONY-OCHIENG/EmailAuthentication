import express from 'express'
import { signup, verifyCode } from '../controllers/auth.controller.js'

const authRoutes = express.Router()
authRoutes.post("/signup",signup)
authRoutes.post("/verifyCode",verifyCode)
export default authRoutes