var express = require('express');
var route = express.Router();
var weibDB = require('../db/weibDB');
var weib = require('../model/weib')
//查询所有
route.get('/findAll',(req,resp)=>{
  weibDB.findAll().then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});

module.exports = route;