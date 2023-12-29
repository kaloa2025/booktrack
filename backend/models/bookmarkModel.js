const mongoose = require('mongoose')

const bmSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
    },
    author: {
        type: String
    },
    price: {
        type: String   
    }     
},{
    versionKey: false
})

module.exports = mongoose.model('bookmark', bmSchema)