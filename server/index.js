import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRoutes from './routes/auth.routes.js'
import path from 'path'
dotenv.config()

const app = express()
const __dirname = path.resolve();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:5173',
    methods:['PUT','GET','POST','DELETE'],
    credentials:true,
})) 
app.use("/api/auth",authRoutes)
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/client/dist")));
	app.all("/*splat", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
	});
}
app.listen(process.env.PORT,() => {
    console.log("server is running")
}) 