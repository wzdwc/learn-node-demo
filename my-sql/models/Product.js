const db = require('../utils/db')

module.exports = db.defineModel('product', {
    email: {
        type  : db.STRING(100),
        unique: true,
    },
    passwd: db.STRING(100),
    name  : db.STRING(100),
    gender: db.BOOLEAN,
})
