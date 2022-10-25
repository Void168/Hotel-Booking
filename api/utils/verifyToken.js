import jwt from 'jsonwebtoken'
import userRoute from '../routes/userRoute'
import { createError } from './error'

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token
  if (!token) {
    return next(createError(401, 'Bạn không có quyền truy cập!'))
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, 'Token is not valid'))
    req.user = userRoute
    next()
  })
}

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next()
    } else {
      if (err) return next(createError(403, 'Bạn không có quyền truy cập!'))
    }
  })
}

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next()
    } else {
      if (err) return next(createError(403, 'Bạn không có quyền truy cập!'))
    }
  })
}
