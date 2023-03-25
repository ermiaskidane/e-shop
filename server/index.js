import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import User from './models/userModel.js'
import connectDB from './config/db.js'
import cors from 'cors'

import userRoutes from './routes/userRoutes.js'

dotenv.config()
connectDB()
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('home page endpoint API is calling')
})

app.use('/api/user', userRoutes)
app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

const PORT = process.env.PORT || 5002

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode port ${PORT}`)
)
