import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'

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
app.use(express.json())

app.use('/auth', authRoute)
app.use('/auth', hotelRoute)
app.use('/auth', userRoute)
app.use('/auth', roomRoute)

app.listen(8800, () => {
  connect()
  console.log('Connected to backend')
})
