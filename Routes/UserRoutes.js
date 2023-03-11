import express from "express"
import asyncHandler from 'express-async-handler'
import User from '../Models/UserModel.js'

const userRouter = express.Router()

/**
 * User: Huy
 * Usage: Chức năng đăng nhập
 */

userRouter.post('/login', asyncHandler(
    async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if(user && (await user.compareMatchPassword(password))) {
            return res.json({
                _id: user._id,
                name: user.name,
                email: user.email.toLowerCase(),
                isAdmin: user.isAdmin,
                token: null,
                createdAt: user.createdAt
            })
        } else {
            res.status(401)
            throw new Error("Tài khoản hoặc mật khẩu không chính xác! Vui lòng thử lại!")
        }
    }
))

export default userRouter
