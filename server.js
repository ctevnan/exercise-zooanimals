var express = require("express");
var app = express();
var PORT = 8080;
var mongojs = require('mongojs')
var db = mongojs("zoo", ["animals"])
db.on('error', function(err){
    console.log("database error:", err);
})

app.use(express.static("public"));

app.get('/', function(req,res){
    res.send(index.html);
})

app.get('/all', function(req,res){
    db.animals.find({}, function(err, documents){
        if(err){
            console.log(err);
        } else {
            res.json(documents);
        }
    })
})

app.get('/weight', function(req,res){
    db.animals.find().sort({weight: 1}, function(err, documents){
        if(err){
            console.log(err);
        } else {
            res.json(documents);
        }
    })
})

app.get('/name', function(req,res){
    db.animals.find().sort({name: 1}, function(err, documents){
        if(err){
            console.log(err);
        } else {
            res.json(documents);
        }
    })
})

app.listen(PORT, function(){
    console.log("Listening on port: " + PORT);
})