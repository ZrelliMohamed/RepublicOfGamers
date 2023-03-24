const conn = require('../index')
module.exports = {
    getAll: function (callback) {
        const sql = 'SELECT * FROM users'
        conn.query(sql, function (error, results) {
          callback(error, results)
        });
      },
      add: function (callback,userinfo) {
        const sql = 'INSERT INTO users set ?'
        conn.query(sql,userinfo,function (error, results) {
          callback(error, results)
        });
      },
      deleteOne :function (callback,userRm) {
        const sql = 'DELETE FROM users WHERE users_id=?;'
        conn.query(sql,userRm,function (error, results) {
          callback(error, results)
        });
      },
      getOne: function(callback,id) {
        const sql = 'SELECT * FROM users where email=?'
        conn.query(sql,id, function (error, results) {
          callback(error, results)
        })
      
      },
      upOne:function(callback,id) {
        const sql = 'update users set ? where users_id = ?'
        conn.query(sql,id, function (error, results) {
          callback(error, results)
        })
      
      },
      oneTeam:function(callback,id) {
        const sql = 'SELECT * FROM users u JOIN teams  t on u.teams_id = t.teams_id where t.teams_id = ?'
        conn.query(sql,id, function (error, results) {
          callback(error, results)
        })
      
      },

      
}