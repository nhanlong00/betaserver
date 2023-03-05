import express from "express"
import asyncHandler from 'express-async-handler'
import Product from "../Models/ProductModel.js"

const productRoute = express.Router()

/**
 * User: Huy
 * Usage: Get all product to database
 */

productRoute.get('/', asyncHandler(
    async (req, res) => {
        const products = await Product.find({})

        if (products) {
            return res.status(200).json({
                errStatus: 'Ok',
                products: products
            })
        } else {
            res.status(404).json({
                errStatus: 'Error',
                messageError: 'Product not found!'
            })
        }
    }
))

/**
 * User: Huy
 * Usage: Get all product a product by id
 */

productRoute.get('/:id', asyncHandler(
    async (req, res) => {
        const product = await Product.findById(req.params.id)

        if (product) {
            return res.status(200).json({
                errStatus: 'Okk',
                product: product
            })
        }
    }
))

export default productRoute
