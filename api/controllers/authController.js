import User from '../models/userModel'
import bcrypt from 'bcryptjs'

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(8)
    const hash = bcrypt.hashSync(req.body.password, salt)

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    })

    await newUser.save()
    res.status(200).send('Tạo tài khoản thành công!')
  } catch (err) {
    next(err)
  }
}

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if (!user) return next(createError(404, 'Tài khoản không tồn tại'))

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password,
    )
    if (!isPasswordCorrect)
      return next(createError(400, 'Sai mật khẩu hoặc tên tài khoản'))
    const { password, isAdmin, ...otherDetails } = user._doc
    res.status(200).json({ ...otherDetails })
  } catch (err) {
    next(err)
  }
}
