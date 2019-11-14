const express = require("express");
const app = express();
const db = require('./db');
const cors = require("cors")
const routerCity = require('./city/city.routes')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())
app.use(routerCity)
app.listen(8080,()=>{console.log("Server is UP!")})