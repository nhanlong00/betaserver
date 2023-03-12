import express from "express"
import asyncHandler from 'express-async-handler'
import protect from "../Middleware/AuthMiddleware.js"
import User from '../Models/UserModel.js'
import generateToken from "../utils/generateToken.js"

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
                token: generateToken(user._id),
                createdAt: user.createdAt
            })
        } else {
            res.status(401)
            throw new Error("Tài khoản hoặc mật khẩu không chính xác! Vui lòng thử lại!")
        }
    }
))

/**
 * User: Huy
 * Usage: Register
 */

userRouter.post('/register', 
    asyncHandler(
        async (req, res) => {
            const { name, email, password } = req.body

            const userExists = await User.findOne({email: email})

            if(userExists) {
                return res.status(401).json({
                    errCode: 2,
                    message: "Tài khoản đã tồn tại!"
                })
            }

            const createNewUser = await User.create({
                name, email, password
            })

            if(createNewUser) {
                return res.json({
                    _id: user._id,
                    name: user.name,
                    email: user.email.toLowerCase(),
                    isAdmin: user.isAdmin,
                    token: generateToken(user._id),
                })
            } else {
                res.status(401)
                throw new Error('Vui lòng nhập lại!')
            }
        }
    )
)

/**
 * User: Huy
 * Usage: Profile
 */

userRouter.get('/profile', 
    protect,
    asyncHandler(
        async (req, res) => {
            const user = await User.findById(req.user._id)

            if(user) {
                res.json({
                    _id: user._id,
                    name: user.name,
                    email: user.email.toLowerCase(),
                    isAdmin: user.isAdmin,
                    createdAt: user.createdAt
                })
            } else {
                res.status(404)
                throw new Error('Không tìm thấy tài khoản')
            }
        }
    )
)



export default userRouter
