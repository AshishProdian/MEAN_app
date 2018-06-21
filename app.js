var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var bodyParser = require('body-parser');
var path = require("path");
const route = require('./routes/route')

var app = express();

//port
const port = 3000;

// init
app.listen(port,()=>{
    console.log("server started at port :"+port);   
});

// cors
app.use(corse());

// body parse
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname , 'public')));

//routes
app.use('/api',route);

app.get('/',(req,res)=>{
    res.send("working");
})