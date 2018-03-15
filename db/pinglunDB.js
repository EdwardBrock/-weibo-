var pool = require('./pool');

module.exports = {
    save(pl){
        var sql = "insert into pinglun values(null,'"
        +pl.name+"',"
        +pl.content+")";
        console.log(sql);
        return pool.execute(sql);
      },
}
