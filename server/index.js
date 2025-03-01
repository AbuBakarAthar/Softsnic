import express from 'express'
import dotenv, { config } from "dotenv";
import MongoConnect from './config/ConnectDB.js';
import route from './routes/contactRoute.js';
import cors from 'cors'

dotenv.config({ path: "./config/.env" });
const app=express()

MongoConnect()

app.use(express.json())
app.use(cors())
// Message Model Route
app.use('/api/v1/message',route)



const PORT=process.env.PORT || 4600
app.listen(PORT,()=>{
    console.log(`Application is running on ${PORT}`)
})