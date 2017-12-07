/**
 * Created by jorky on 2017/12/7.
 */
// 导入http模块
let http = require('http')
let path = require('path')
let fs = require('fs')
let url = require('url')

// 获取命令行输入的目录，否则就是当前目录
let root = path.resolve(process.argv[2] || '.')
let server = http.createServer((request, response) => {
    'use strict'
    // 从url中获取文件名称
    let pathname = url.parse(request.url).pathname
    // 与root目录拼接成完整路径
    let filepath = path.join(root, pathname)
    // 获取文件状态
    fs.stat(filepath, (err, stats) => {
        if (!err) {
            // 当前路径是个目录
            if (stats.isDirectory()) {
                // 定义默认目录
                let defaultFiles = ['index.html', 'default.html']
                // 遍历默认文件
                defaultFiles.forEach(defaultFile => {
                    // 拼接路径
                    filepath = path.join(root, defaultFile)
                    console.log('filePath', filepath)
                    fs.stat(filepath, (err, stats) => {
                        if (!err) {
                            // 输出文件
                            console.log('request 200', request.url)
                            // 发送200 响应
                            response.writeHead(200)
                            // 将文件流导向response
                            fs.createReadStream(filepath).pipe(response)
                        } else {
                            // 出错了
                            console.log('404', err)
                            // 发送404 请求
                            response.writeHead(404)
                            response.end('404 Not Found')
                        }
                    })
                })
            }
            if (stats.isFile()) {
                // 输出文件
                console.log('request 200', request.url)
                // 发送200 响应
                response.writeHead(200)
                // 将文件流导向response
                fs.createReadStream(filepath).pipe(response)
            } else {
                // 出错了
                console.log('404', err)
                // 发送404 请求
                response.writeHead(404)
                response.end('404 Not Found')
            }
        }
    })
    // console.log('request', request)
    // 将200状态写入response并且设置content-type为text／html
    // response.writeHead(200, {'content-Type': 'text/html'})
    // 写入hello world
    // response.end('<h1>hello world!</h1>')
})

server.listen(8080)
console.log('server is running in http://127.0.0.1:8080/')
