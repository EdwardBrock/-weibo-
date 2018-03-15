var pool = require('./pool');

module.exports = {
  findAll() {
    var sql = "select * from weib";
    return pool.execute(sql);
  },
  findById(id,content){
    var sql = "select content2 from weib where id='"+id+"' &content='"+content+"'";
    return pool.execute(sql);
  }
};
