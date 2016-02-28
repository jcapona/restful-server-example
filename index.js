var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require("mongoose");

// App configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());

app.get("/", function(req, res) { 
 res.send("Hello World!");
});

app.listen(5000, function(){
 console.log("index.js listening on port 5000");
})