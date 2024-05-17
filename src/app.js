import cookieParser from 'cookie-parser';
import express from 'express'
import cors from 'cors'
const app = express();

// basic configuration of the express app
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(cookieParser())



//import routers here



// https:localhost:3000/api/v1/users
export { app }