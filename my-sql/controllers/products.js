const model = require('../model')
let Product = model.Product

module.exports = {
    getProducts: async () => {
        return await Product.findAll()
    },
    getProduct: (id) => {

    },
    createProduct: (name, manufacturer, price) => {
    },
    deleteProduct: (id) => {
    },
}
