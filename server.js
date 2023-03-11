import express from 'express'
import dotenv from 'dotenv'
import connectDatabase from './config/MongoDb.js'
import ImportData from './DataImport.js'
import productRoute from './Routes/ProductRoutes.js'
import { errorHandler, notFound } from './Middleware/Error.js'
import userRouter from './Routes/UserRoutes.js'

dotenv.config()

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 8001
connectDatabase()

// API
app.use('/v1/import', ImportData)
app.use('/v1/products', productRoute)
app.use('/v1/users', userRouter)

// Midleware
app.use(notFound)
app.use(errorHandler)

app.listen(PORT)
