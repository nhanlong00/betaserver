import express from 'express'
import dotenv from 'dotenv'
import connectDatabase from './config/MongoDb.js'
import ImportData from './DataImport.js'
import productRoute from './Routes/ProductRoutes.js'
import { errorHandler, notFound } from './Middleware/Error.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8001
connectDatabase()

// API
app.use('/api/import', ImportData)
app.use('/api/products', productRoute)

// Midleware
app.use(notFound)
app.use(errorHandler)

app.listen(PORT)
