/**
 * Created by jorky on 2017/12/7.
 */
const Koa = require('koa')
const app = new Koa()
app.use(async (ctx, next) => {
    await next()
    ctx.response.type = 'text/html'
    ctx.response.body = '<h1>hello, koa2!</h1>'
})
app.listen(3000)
console.log('app start at http://localhost:3000')
