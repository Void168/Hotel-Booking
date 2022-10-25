import express from 'express'
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getSingleHotel,
  updateHotel,
} from '../controllers/hotelController'

const hotelRoute = express.Router()

// create hotel
route.post('/', createHotel)

// update hotel

route.put('/:id', updateHotel)

// delete
route.delete('/:id', deleteHotel)

// get single hotel
route.get('/:id', getSingleHotel)

// get all hotels
route.get('/', getAllHotel)

export default hotelRoute
