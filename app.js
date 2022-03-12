const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
// parse application/json
app.use(bodyParser.json());
 
//create database connection
const conn = mysql.createConnection({
  host: 'dev-mysqldb',
  user: 'mysqluser',
  password: 'root1234',
  database: 'hello_world'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//show all products
app.get('/',(req, res) => {
  let sql = "SELECT * FROM messages";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
//    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    res.send(results);
  });
});
  
//Server listening
app.listen(80,() =>{
  console.log('Server started on port 80...');
});
