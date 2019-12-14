const user = require("./user.model")

const getUsers = (req,res)=>{
    user.find({}).then((users)=>{res.json(users).status(204)})
}
const getUsersId = (req,res)=>{
    user.find({_id:req.params.id}).then((users)=>{res.json(users).status(204)})
}

const createuser = (req,res)=>{
    console.log(req.body)
    user.create({country:req.body.country,user:req.body.user}).then((createduser)=>{
        res.json(createduser).status(200)
    }).catch((err)=>{
        res.json(err).status(500)
    })
}

const deleteUsersId = (req,res)=>{
    user.find({_id:req.params.id}).then((users)=>{res.json(users).status(204)})
}
module.exports = {
    getUsers,
    getUsersId,
    createuser,
    deleteUsersId
}