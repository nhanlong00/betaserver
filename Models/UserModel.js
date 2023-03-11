import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false
    },
}, {
    timestamps: true
})

/**
 * User: Huy
 * Usage: Login
 */

userSchema.methods.compareMatchPassword = async function(comparePassword){
    try {
        return await bcrypt.compare(comparePassword, this.password);

    } catch(err){
        throw new Error(err.message);
    }
}

const User = mongoose.model('User', userSchema)

export default User
