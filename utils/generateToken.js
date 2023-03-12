import jwt from 'jsonwebtoken'

/**
 * User: Huy
 * Usage: create token
 * return: @return array
 */
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

export default generateToken