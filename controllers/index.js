var express = require('express')
var http = require('http')
var path = require('path')
let https = require('https');
const app = express.Router()
var bodyParser = require('body-parser');
var mysql = require('mysql');

app.use(bodyParser());

app.get('/',(req,res) =>{
    console.log("Get Data");
            res.render('./index.ejs');
});

module.exports = app