const mongoose = require("mongoose");
const citySchema =new mongoose.Schema({
    email:String,
    password:String
})

module.exports = mongoose.model('users',citySchema)