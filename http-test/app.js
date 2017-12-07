/**
 * Created by jorky on 2017/12/7.
 */
// 导入http模块
let http = require('http')
let server = http.createServer((request, response) => {
    'use strict'
    // console.log('request', request)
    // 将200状态写入response并且设置content-type为text／html
    // response.writeHead(200, {'content-Type': 'text/html'})
    // 写入hello world
    response.end('<h1>hello world!</h1>')
})

server.listen(8080)
console.log('server is running in http://127.0.0.1:8080/')
