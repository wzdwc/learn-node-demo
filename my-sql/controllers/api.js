
const products = require('./products')

const APIError = require('../utils/rest').APIError

module.exports = {
    'GET /api/products': async (ctx, next) => {
        ctx.rest({
            products: products.getProducts(),
        })
    },
    'GET /api/products/:id': async (ctx, next) => {
        let {id} = ctx.params
        console.log(`get product ${id}...`)
        ctx.rest({
            products: products.getProduct(id),
        })
    },
    'POST /api/products': async (ctx, next) => {
        let form = ctx.request.body
        let p = products.createProduct(form)
        ctx.rest(p)
    },
    'DELETE /api/products/:id': async (ctx, next) => {
        let {id} = ctx.params
        console.log(`delete product ${id}...`)
        let p = products.deleteProduct(id)
        if (p) {
            ctx.rest(p)
        } else {
            throw new APIError('product:not_found', 'product not found by id.')
        }
    },
}
