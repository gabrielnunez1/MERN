const router = require('express').Router()
const userController = require('./user.controller')

router.get("/user/",cityController.getUsers)
router.get("/user/:id",cityController.getUsersId)
router.post("/user/users",cityController.createCity)
router.delete("/user/delete/:id",cityController.deleteUsersId)


module.exports = router