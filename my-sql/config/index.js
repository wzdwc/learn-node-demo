const devConfig = './config-dev.js'
const testConfig = './config-test.js'
const proConfig = './config-pro.js'
const fs = require('fs')

var config = null

if (process.env.NODE_ENV === 'dev') {
    console.log(`Load ${devConfig}...`)
    config = require(devConfig)
} else if (process.env.NODE_ENV === 'test') {
    config = require(testConfig)
} else {
    try {
        if (fs.statSync(proConfig).isFile()) {
            console.log(`Load ${proConfig}...`)
            config = Object.assign(config, require(proConfig))
        }
    } catch (err) {
        console.log(`Cannot load ${proConfig}.`)
    }
}
module.exports = config
