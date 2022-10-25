import Room from '../models/roomModel.js'
import Hotel from '../models/hotelModel.js'
import { createError } from '../utils/error'

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId
  const newRoom = newRoom(req.body)

  try {
    const savedRoom = await newRoom.save()
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      })
    } catch (err) {
      next(err)
    }
    res.status(200).json(savedRoom)
  } catch (err) {
    next(err)
  }
}

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    )
    res.status(200).json(updatedRoom)
  } catch (err) {
    next(err)
  }
}

export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId
  try {
    await Room.findByIdAndDelete(req.params.id)
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      })
    } catch (err) {
      next(err)
    }
    res.status(200).json('Đã xóa bỏ phòng')
  } catch (err) {
    next(err)
  }
}

export const getSingleRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id)
    res.status(200).json(room)
  } catch (err) {
    next(err)
  }
}

export const getAllRoom = async (req, res, next) => {
  const failed = false
  if (failed) return next(createError(401, 'Bạn không có quyền truy cập!'))
  try {
    const rooms = await Room.find()
    res.status(200).json(rooms)
  } catch (err) {
    next(err)
  }
}
