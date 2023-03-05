import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true,
        unique: true
    },
    description: {
        type: String,
        require: true
    },
    reviews: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Review'
    },
    rating: {
        type: Number,
        require: true,
        default: 0
    },
    numReviews: {
        type: Number,
        require: true,
        default: 0
    },
    price: {
        type: Number,
        require: true,
        default: 0
    },
    countInStock: {
        type: Number,
        require: true,
        default: 0
    },
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product

