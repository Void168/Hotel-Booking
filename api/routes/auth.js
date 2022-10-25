import express from 'express'

const authRoute = express.Router()

authRoute.get('/', function (req, res) {
  res.send('Endpoint')
})

authRoute.get('/register', function (req, res) {
  res.send('Register')
})

export default authRoute
