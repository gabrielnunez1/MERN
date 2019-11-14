const router = require('express').Router()
const cityController = require('./city.controller')

router.get("/city/",cityController.getCities)
router.get("/city/:id",cityController.getCitiesId)
router.post("/city/cities",cityController.createCity)
router.delete("/city/delete/:id",cityController.deleteCitiesId)


module.exports = router