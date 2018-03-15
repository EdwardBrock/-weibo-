var express = require('express');
var route = express.Router();
var pinglunDB = require('../db/pinglunDB');
var pinglun = require('../model/pinglun')
//录入
route.post('/save',(req,resp)=>{
    var pl = new pinglun();
    Object.assign(pl,req.body);
    console.log(req.body)
    pinglunDB.save(pl).then((data)=>{
      console.log(data);
      resp.send(data);
    }).catch((error)=>{
      resp.send(error);
    });
  });
  

module.exports = route;