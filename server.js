/**
 * Created by vasumathi on 26/12/2017.
 */
var express = require('express')
var app = express()

app.get('/',function(req,res){
    console.log("received request");
    res.send("hello world !!");
});
app.listen(3000)