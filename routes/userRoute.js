let express = require('express');
let route = express.Router();
let userDB = require('../db/userDB');
let User = require('../model/User')
//通过id查询
route.get('/findByName',(req,resp)=>{
  userDB.findByName(req.query.name).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//查询所有
route.get('/findAll',(req,resp)=>{
  userDB.findAll().then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//录入
route.post('/save',(req,resp)=>{
  let user = new User();
  Object.assign(user,req.body);
  userDB.save(user).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
module.exports = route;