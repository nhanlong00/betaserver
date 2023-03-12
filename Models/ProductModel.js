import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    nameProd: {
        type: String,
        require: true
    },
    thumbnails: {
        type: Array,
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
    quantity: {
        type: Number,
        require: true,
        default: 0
    },
    countInStock: {
        type: Number,
        require: true,
        default: 0
    },
    color: {
        type: Array,
        require: true,
        default: 0
    },
    size: {
        type: Array,
        require: true,
        default: 0
    },
    size: {
        type: Array,
        require: true,
        default: 0
    },
    categories: {
        type: Array,
        require: true,
        default: 0
    },
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product

