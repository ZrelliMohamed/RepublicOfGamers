const conn = require('../index')
module.exports = {
    getAll: function (callback) {
        const sql = 'SELECT * FROM teams'
        conn.query(sql, function (error, results) {
          callback(error, results)
        });
      },
      getOne: function (callback,id) {
        const sql = 'SELECT * FROM teams where teams_id =?'
        conn.query(sql,id, function (error, results) {
          callback(error, results)
        });
      },
      add:function (callback,postInfo) {
        const sql = 'INSERT INTO teams set ?'
        conn.query(sql,postInfo, function (error, results) {
          callback(error, results)
        });
      },
      deleteOne :function (callback,teamRm) {
        const sql = 'DELETE FROM teams WHERE teams_id=?;'
        conn.query(sql,teamRm,function (error, results) {
          callback(error, results)
        });
      },
      upOne:function(callback,id) {
        const sql = 'update teams set ? where teams_id = ?'
        conn.query(sql,id, function (error, results) {
          callback(error, results)
        })
      
      },

}