import express from 'express'
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from '../controllers/userController.js'
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js'

const userRoute = express.Router()

// check authentication
userRoute.get('/checkauthentication', verifyToken, (req, res, next) => {
  res.send('Login successfully!')
})

// check user
userRoute.get('/checkuser/:id', verifyUser, (req, res, next) => {
  res.send('Login successfully!')
})

// check admin
userRoute.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
  res.send('Login successfully!')
})

// update User

userRoute.put('/:id', verifyUser, updateUser)

// delete
userRoute.delete('/:id', verifyUser, deleteUser)

// get single User
userRoute.get('/:id', verifyUser, getSingleUser)

// get all Users
userRoute.get('/', verifyAdmin, getAllUser)

export default userRoute
