const mongoose = require("mongoose");
const citySchema =new mongoose.Schema({
    nombre:String,
    categoria:String
})

module.exports = mongoose.model('cities',citySchema)