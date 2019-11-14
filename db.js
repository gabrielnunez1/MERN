const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Gabriel:inet5@cluster0-ckubf.gcp.mongodb.net/myapp?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.catch((err)=>{console.log('Error ',err.message)});

const db = mongoose.connection;

module.exports= db;