const city = require("./city.model")

const getCities = (req,res)=>{
    city.find({}).then((cities)=>{res.json(cities).status(204)})
}
const getCitiesId = (req,res)=>{
    city.find({_id:req.params.id}).then((cities)=>{res.json(cities).status(204)})
}

const createCity = (req,res)=>{
    console.log(req.body)
    city.create({country:req.body.country,city:req.body.city}).then((createdCity)=>{
        res.json(createdCity).status(200)
    }).catch((err)=>{
        res.json(err).status(500)
    })
}

const deleteCitiesId = (req,res)=>{
    city.find({_id:req.params.id}).then((cities)=>{res.json(cities).status(204)})
}
module.exports = {
    getCities,
    getCitiesId,
    createCity,
    deleteCitiesId
}