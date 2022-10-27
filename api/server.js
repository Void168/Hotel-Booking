import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/authRoute.js'
import userRoute from './routes/userRoute.js'
import hotelRoute from './routes/hotelRoute.js'
import roomRoute from './routes/roomRoute.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()
dotenv.config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('Connected to mongodb')
  } catch (error) {
    throw error
  }
}

mongoose.connection.on('disconnected', () => {
  console.log('mongodb disconnected')
})

mongoose.connection.on('connected', () => {
  console.log('mongodb connected')
})

app.get('/', (req, res) => {
  res.send('First request!')
})

// middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/hotels', hotelRoute)
app.use('/api/users', userRoute)
app.use('/api/rooms', roomRoute)

app.listen(8800, () => {
  connect()
  console.log('Connected to backend')
})
