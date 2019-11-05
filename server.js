const express = require("express");
const app = express();
const mongoose =require("mongoose")
const Product = require("./product")
const cors = require("cors")
app.use(cors())
app.get("/",(req,res)=>{
    res.json({respuesta:"Buenas noches america"}).status(200);
})
app.get("/stock/products",(req,res)=>{

        mongoose.connect('mongodb+srv://gucompi:Teni-935@gucompi-0xprj.gcp.mongodb.net/stock?retryWrites=true&w=majority')
        // mongoose.connect('mongodb+srv://Gabriel:inet5@cluster0-ckubf.gcp.mongodb.net/Cluster0?retryWrites=true&w=majority')
      
        .then(()=>{
            Product
             .find({}).then((products)=>{res.json(products).status(204)})

        })



})

app.listen(8080,()=>{console.log("Server is UP!")}) 