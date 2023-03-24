const mysql = require('mysql2')
const connection = mysql.createConnection(
    {
        "host": "localhost",
        "user": "root",
        "password": "root",
        "database": "myData"
    }
)
connection.connect((err)=>{
  if(err){
    console.log(err)
  }
  else{
    console.log("database connected")
  }
})
module.exports = connection
