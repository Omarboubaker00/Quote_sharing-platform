const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mvp'
}).promise();

connection.connect().then(()=>{
    console.log("db connected")
  }).catch((error)=>{
    console.log(error)
  })


module.exports=connection

