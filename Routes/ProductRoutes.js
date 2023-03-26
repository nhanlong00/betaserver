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
        const keyword = req.params.keyword ? {
            name: {
                $regex: req.query.keyword,
                $options: "i" 
            },
        } : {}

        const products = await Product.find({...keyword})

        if (products) {
            return res.status(200).json({
                errStatus: 'Ok',
                products: products
            })
        } else {
            res.status(404).json({
                errStatus: 'Error',
                messageError: 'Không tìm thấy sản phẩm ...'
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
            return res.json(product)
        }
    }
))

export default productRoute
