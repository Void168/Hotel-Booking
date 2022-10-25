import User from '../models/userModel.js'
import { createError } from '../utils/error.js'

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    )
    res.status(200).json(updatedUser)
  } catch (err) {
    next(err)
  }
}

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json('Đã xóa bỏ khách sạn')
  } catch (err) {
    next(err)
  }
}

export const getSingleUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

export const getAllUser = async (req, res, next) => {
  const failed = false
  if (failed) return next(createError(401, 'Bạn không có quyền truy cập!'))
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
}
