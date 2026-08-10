import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRoutes from './routes/auth.routes.js'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:5173',
    methods:['PUT','GET','POST','DELETE'],
    credentials:true,
}))
app.use("/api/auth",authRoutes)
app.listen(process.env.PORT,() => {
    console.log("server is running")
}) 