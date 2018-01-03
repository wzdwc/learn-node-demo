const model = require('../models/index')
let Product = model.Product

module.exports = {
    async getProducts() {
        return await Product.findAll()
    },
    async getProduct(id) {
        return await Product.findById(id)
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
