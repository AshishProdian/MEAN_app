var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var bodyParser = require('body-parser');
var path = require("path");


var app = express();

const route = require('./routes/route')

//port
const port = 3000;
 // Db connection

mongoose.connect('mongodb://localhost:27017/contactlist');

 // after connection

mongoose.connection.on('connected',()=>{
console.log(" DB connected");

});

mongoose.connection.on('error', (e) => {
    console.log(e);

});

// init
app.listen(port,()=>{
    console.log("server started at port :"+port);   
});

// cors
app.use(cors());

// body parse
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname , 'public')));

//routes
app.use('/api' , route);

app.get('/',(req , res)=>{
    res.send("working");
});