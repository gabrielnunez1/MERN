const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://gucompi:Teni-935@gucompi-0xprj.gcp.mongodb.net/stock?retryWrites=true&w=majority')
// mongoose.connect('mongodb+srv://Gabriel:inet5@cluster0-ckubf.gcp.mongodb.net/Cluster0?retryWrites=true&w=majority')
.catch((err)=>{console.log('Error ',err.message)});


const db = mongoose.connection;


module.exports= db;