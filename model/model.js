const mongoose = require('mongoose')



const carSchema = new mongoose.Schema({
    make: String,
    model: String
})

module.exports = mongoose.model('carType', carSchema)
