import express from 'express'
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getSingleHotel,
  updateHotel,
} from '../controllers/hotelController.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const hotelRoute = express.Router()

// create hotel
hotelRoute.post('/', verifyAdmin, createHotel)

// update hotel

hotelRoute.put('/:id', verifyAdmin, updateHotel)

// delete
hotelRoute.delete('/:id', verifyAdmin, deleteHotel)

// get single hotel
hotelRoute.get('/:id', getSingleHotel)

// get all hotels
hotelRoute.get('/', getAllHotel)

export default hotelRoute
