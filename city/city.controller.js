const city = require("./city.model")

const getcitys = (req,res)=>{
    getcities
    .find({}).then((cities)=>{res.json(cities).status(204)})
}
// const getcity = (req,res)=>{
//     city
//     .find({_id:req.params.pepe}).then((cities)=>{res.json(cities).status(204)})
// }
module.exports = {
    getcities
}