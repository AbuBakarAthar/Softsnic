// server/index.js

import express from 'express'
import dotenv from "dotenv";
import MongoConnect from '../config/ConnectDB.js'; // ✅ adjust path to one level up
import route from '../routes/contactRoute.js';     // ✅ adjust path to one level up
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config({ path: "../config/.env" }); // ✅ adjust path
const app = express()

MongoConnect()
app.use(express.json())
app.use(cors())
app.use('/api/v1/message', route)

// ✅ Required for __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Pointing to 'dist' from one level up
app.use(express.static(path.join(__dirname, '..', 'dist')));

// ✅ Send index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 4600
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
})
