import Hotel from '../models/hotelModel.js'
import { createError } from '../utils/error.js'

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body)
  try {
    const savedHotel = await newHotel.save()
    res.status(200).json(savedHotel)
  } catch (err) {
    next(err)
  }
}

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    )
    res.status(200).json(updatedHotel)
  } catch (err) {
    next(err)
  }
}

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id)
    res.status(200).json('Đã xóa bỏ khách sạn')
  } catch (err) {
    next(err)
  }
}

export const getSingleHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id)
    res.status(200).json(hotel)
  } catch (err) {
    next(err)
  }
}

export const getAllHotel = async (req, res, next) => {
  // const { min, max, ...others } = req.query
  const failed = false
  if (failed) return next(createError(401, 'Bạn không có quyền truy cập!'))
  try {
    const hotels = await Hotel.find()
    res.status(200).json(hotels)
  } catch (err) {
    next(err)
  }
}

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(',')

  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city })
      }),
    )
    res.status(200).json(list)
  } catch (err) {
    next(err)
  }
}

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: 'Khách sạn' })
    const apartmentsCount = await Hotel.countDocuments({ type: 'Căn hộ' })
    const rentCount = await Hotel.countDocuments({ type: 'Nhà cho thuê' })
    const villaCount = await Hotel.countDocuments({ type: 'Biệt thự' })
    const homeStayCount = await Hotel.countDocuments({ type: 'Nhà trệt' })
    res.status(200).json([
      { type: 'Khách sạn', count: hotelCount },
      { type: 'Căn hộ', count: apartmentsCount },
      { type: 'Nhà cho thuê', count: rentCount },
      { type: 'Biệt thự', count: villaCount },
      { type: 'Nhà trệt', count: homeStayCount },
    ])
  } catch (err) {
    next(err)
  }
}
