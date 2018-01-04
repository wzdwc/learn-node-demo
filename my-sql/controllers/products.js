const model = require('../models/index')
let Product = model.Product

module.exports = {
    async getProducts() {
        let products = await Product.findAll()
        return products
    },
    async getProduct(id) {
        let product = await Product.findById(id)
        return product
    },
    async createProduct(form) {
        'use strict'
        let {name, price} = form
        return await Product.create({
            prdName: name,
            price  : price
        })
    },
    async deleteProduct(id) {
    },
}
