var weibo=require("./weibDB");
var pinglunDB=require("./pinglunDB");
var  pinglun = require('../model/pinglun');
weibo.findAll().then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err)
});
var pl = new pinglun(null,'ccccccccc');
pinglunDB.save(pl).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了 ！"+error);
});