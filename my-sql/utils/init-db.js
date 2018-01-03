/**
 * Created by jorky on 2017/12/24.
 */
const model = require('../models/index')
model.sync()

console.log('init db ok!')
process.exit(0)
