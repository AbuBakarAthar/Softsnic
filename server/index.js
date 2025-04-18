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
app.use('/api/v1/message', route)

// ✅ Vite uses 'dist' instead of 'build'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve React's static files from 'dist'
app.use(express.static(path.join(__dirname, 'client/dist')));

// ✅ Fallback route for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

const PORT = process.env.PORT || 4600
app.listen(PORT, () => {
  console.log(`Application is running on ${PORT}`)
})
