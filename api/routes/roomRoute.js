import express from 'express'
import {
  createRoom,
  deleteRoom,
  getAllRoom,
  getSingleRoom,
  updateRoom,
} from '../controllers/roomController.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const roomRoute = express.Router()

roomRoute.post('/:hotelid', verifyAdmin, createRoom)

// update User

roomRoute.put('/:id', verifyAdmin, updateRoom)

// delete
roomRoute.delete('/:id', verifyAdmin, deleteRoom)

// get single User
roomRoute.get('/:id/:hotelid', getSingleRoom)

// get all Users
roomRoute.get('/', getAllRoom)

export default roomRoute
