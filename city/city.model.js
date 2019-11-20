const mongoose = require("mongoose");
const citySchema =new mongoose.Schema({
    country:String,
    city:String
})

module.exports = mongoose.model('cities',citySchema)