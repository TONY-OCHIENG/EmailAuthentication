import express from 'express'
import { login, newPassword, resetPassword, signup, verifyCode } from '../controllers/auth.controller.js'

const authRoutes = express.Router()
authRoutes.post("/signup",signup)
authRoutes.post("/verifyCode",verifyCode)
authRoutes.post("/login",login)
authRoutes.post("/resetPassword",resetPassword)
authRoutes.put("/newpassword/:token",newPassword)
export default authRoutes