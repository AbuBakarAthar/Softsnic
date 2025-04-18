import express from 'express'
import dotenv from "dotenv";
import MongoConnect from './config/ConnectDB.js';
import route from './routes/contactRoute.js';
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config({ path: "./config/.env" });
const app = express()

MongoConnect()

app.use(express.json())
app.use(cors())

// Your API route
app.use('/api/v1/message', route)

// ✅ Get directory name (since you're using ES module)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')))

// ✅ Fallback to React's index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

const PORT = process.env.PORT || 4600
app.listen(PORT, () => {
  console.log(`Application is running on ${PORT}`)
})
