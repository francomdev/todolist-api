import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { itemsRouter } from './routes/items.js'
dotenv.config()

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.disable('x-powered-by')

mongoose.connect(process.env.MONGO_ATLAS_URI)

app.use('/items', itemsRouter)

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))
