const db = require('../utils/db')

module.exports = db.defineModel('product', {
    name : db.STRING(100),
    price: db.BOOLEAN,
    desc : db.STRING(100),
})
