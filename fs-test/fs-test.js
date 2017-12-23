'use strict'
let fs = require('fs')
let data = {
    name : 'test3322223',
    value: '11331',
}
fs.readFile('./test/test.json', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

fs.writeFile('./test/test2.json', JSON.stringify(data, null, '\t'), (err) => {
    if (err) {
        console.log(err)
    } else {
        let rs = fs.createReadStream('./test/test.json')
        let ws = fs.createWriteStream('./test/test2.json')
        rs.pipe(ws)
    }
})
