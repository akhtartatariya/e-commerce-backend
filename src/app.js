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

import userRouter from './routes/user.route.js'
import productRouter from './routes/product.route.js'
import ownerRouter from './routes/owner.route.js'

app.use('/api/v1/users',userRouter)
app.use('/api/v1/products',productRouter)
app.use('/api/v1/owners',ownerRouter)

// https:localhost:3000/api/v1/users
export { app }