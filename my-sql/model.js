const fs = require('fs')
const db = require('./db')
let files = fs.readdirSync(__dirname + 'models')

let jsFiles = files.filter(f => {
    'use strict'
    return f.endsWith('.js')
}, files)

for (let f of jsFiles) {
    console.log(`import model from file ${f}...`)
    let name = f.substring(0, f.length - 3)
    console.log('fileName', f.filename)
    module.exports[name] = require(`${__dirname}/models/${f}`)
}
module.exports.sync = () => {
    'use strict'
    db.sync()
}
