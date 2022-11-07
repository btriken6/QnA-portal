const dotenv=require("dotenv")
const { response } = require('express');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
// const mongoose = require('mongoose');
const cors = require('cors')
app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

dotenv.config({path:'./config.env'})
require('./db/conn')
const port = process.env.PORT

app.listen(port, () => {
    console.log("started the server");
})


//middleware
const middleware=((req,res,next)=>{
    console.log("hello middleware")
    next()
})

app.get('/',async (req,res)=>{
    res.send("hello")
})
app.get('/about',middleware, async (req,res)=>{
    res.send("about")
    
})