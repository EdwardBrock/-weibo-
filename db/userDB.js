let pool = require('./pool');


module.exports={
	findByName(name){
		var sql = "select psw from user where name='"+name+"'";
		return pool.execute(sql);
  },
	findAll(){
      var sql = "select * from user";
      return pool.execute(sql);
    },
    save(user){
      var sql = "insert into user values(null,'"
      +user.name+"',"
      +user.psw+")";
      console.log(sql);
      return pool.execute(sql);
    },
}