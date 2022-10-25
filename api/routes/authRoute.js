import express from 'express'
import { login, register } from '../controllers/authController.js'

const authRoute = express.Router()

authRoute.get('/', function (req, res) {
  res.send('Endpoint')
})

// register
authRoute.post('/register', register)

// login
authRoute.post('/login', login)

export default authRoute
