const model = require('../models/index')
let Product = model.Product

module.exports = {
    async getProducts() {
        let products = await Product.findAll({
            where: {
                name: 'test'
            }
        })
        console.log(products)
        return await Product.findAll()
    },
    async getProduct(id) {
        let product = await Product.findById(id)
        console.log('product:', product)
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
